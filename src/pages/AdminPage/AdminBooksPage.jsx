import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { ContentList, InfoMessage, Loader, Pagination, StatusField } from "../../components";

import { useBooks } from "../../hooks";
import { clearBooks, fetchAllBooks, setPageBooks } from "../../redux";
import { PAGE_LIMIT, bookStatuses } from "../../constants";

const AdminBooksPage = () => {
  const { books, page, totalBooks, totalPages, isLoading } = useBooks();

  const [status, setStatus] = useState("Show All");
  const [statuses, setStatuses] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const keyword = searchParams.get("keyword");

  useEffect(() => {
    setStatuses(["Show All", ...bookStatuses]);
  }, []);

  useEffect(() => {
    dispatch(clearBooks());
  }, [dispatch]);

  useEffect(() => {
    const config = {
      params: {
        page,
        size: PAGE_LIMIT,
        ...(keyword && { keyword }),
        ...(status !== "Show All" && { status }),
      },
      isAdmin: true,
    };

    dispatch(fetchAllBooks(config));
  }, [dispatch, page, keyword, status]);

  const handleChangeStatus = (status) => {
    dispatch(setPageBooks(0));
    setStatus(status);
  };

  const handleSetPage = (page) => {
    dispatch(setPageBooks(page));
  };

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
