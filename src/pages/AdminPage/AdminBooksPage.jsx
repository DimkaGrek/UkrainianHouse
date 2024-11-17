import { ContentList, InfoMessage, Loader, Pagination, StatusField } from "../../components";

import { bookStatuses } from "../../constants";
import { useAdminPage, useBooks } from "../../hooks";
import { clearBooks, fetchAllBooks, setPageBooks } from "../../redux";
const AdminBooksPage = () => {
  const { books, page, totalBooks, totalPages, isLoading } = useBooks();
  const { status, statuses, keyword, handleChangeStatus, handleSetPage } = useAdminPage(
    page,
    bookStatuses,
    clearBooks,
    fetchAllBooks,
    setPageBooks
  );

  return (
    <>
      <section className="py-5">
        <div className="mb-3 flex justify-between">
          <h2 className="text-[24px] font-medium">Total books: {totalBooks}</h2>
          <StatusField
            status={status}
            setStatus={handleChangeStatus}
            statuses={statuses}
            showLabel={false}
          />
        </div>

        {!books.length ? (
          <InfoMessage messageText="Please add a book." keyword={keyword} status={status} />
        ) : (
          <ContentList items={books} />
        )}
        <Pagination setPage={handleSetPage} page={page} totalPages={totalPages} />
      </section>
      {isLoading && <Loader />}
    </>
  );
};

export default AdminBooksPage;
