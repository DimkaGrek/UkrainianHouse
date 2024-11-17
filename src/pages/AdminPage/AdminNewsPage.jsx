import { ContentList, InfoMessage, Loader, Pagination, StatusField } from "../../components";

import { newsStatuses } from "../../constants";
import { useAdminPage, useNews } from "../../hooks";
import { clearNews, fetchAllNews, setPageNews } from "../../redux";

const AdminNewsPage = () => {
  const { news, page, totalNews, totalPages, isLoading } = useNews();
  const { status, statuses, keyword, handleChangeStatus, handleSetPage } = useAdminPage(
    page,
    newsStatuses,
    clearNews,
    fetchAllNews,
    setPageNews
  );
  return (
    <>
      <section className="py-5">
        <div className="mb-3 flex justify-between">
          <h2 className="text-[24px] font-medium">Total news: {totalNews}</h2>
          <StatusField
            status={status}
            setStatus={handleChangeStatus}
            statuses={statuses}
            showLabel={false}
          />
        </div>

        {!news.length ? (
          <InfoMessage messageText="Please add an article." keyword={keyword} status={status} />
        ) : (
          <ContentList items={news} />
        )}

        <Pagination setPage={handleSetPage} page={page} totalPages={totalPages} />
      </section>
      {isLoading && <Loader />}
    </>
  );
};

export default AdminNewsPage;
