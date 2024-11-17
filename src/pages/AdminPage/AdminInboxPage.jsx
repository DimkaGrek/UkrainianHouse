import { ContentList, InfoMessage, Loader, Pagination, StatusField } from "../../components";

import { messagesStatuses } from "../../constants";
import { useAdminPage, useMessages } from "../../hooks";
import { clearMessages, fetchAllMessages, setPageMessages } from "../../redux";

const AdminInboxPage = () => {
  const { messages, page, totalMessages, totalPages, isLoading } = useMessages();
  const { status, statuses, keyword, handleChangeStatus, handleSetPage } = useAdminPage(
    page,
    messagesStatuses,
    clearMessages,
    fetchAllMessages,
    setPageMessages
  );

  return (
    <>
      <section className="py-5">
        <div className="mb-3 flex justify-between">
          <h2 className="text-[24px] font-medium">Total messages: {totalMessages}</h2>
          <StatusField
            status={status}
            setStatus={handleChangeStatus}
            statuses={statuses}
            showLabel={false}
          />
        </div>
        {!messages.length ? (
          <InfoMessage messageText="No messages received." keyword={keyword} status={status} />
        ) : (
          <ContentList items={messages} />
        )}
        <Pagination setPage={handleSetPage} page={page} totalPages={totalPages} />
      </section>
      {isLoading && <Loader />}
    </>
  );
};

export default AdminInboxPage;
