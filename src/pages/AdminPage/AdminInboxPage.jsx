import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ContentList, InfoMessage, Loader, Pagination, StatusField } from "../../components";

import { useMessages } from "../../hooks";
import { PAGE_LIMIT, messagesStatuses } from "../../constants";
import { clearMessages, fetchAllMessages, setPageMessages } from "../../redux";

const AdminInboxPage = () => {
  const { messages, page, totalMessages, totalPages, isLoading } = useMessages();

  const [status, setStatus] = useState("Show All");
  const [statuses, setStatuses] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const keyword = searchParams.get("keyword");

  useEffect(() => {
    setStatuses(["Show All", ...messagesStatuses]);
  }, []);

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  useEffect(() => {
    const config = {
      params: {
        page,
        size: PAGE_LIMIT,
        ...(keyword && { keyword }),
        ...(status !== "Show All" && {
          read: status === "UNREAD" ? false : status === "READ" ? true : undefined,
        }),
      },
    };

    dispatch(fetchAllMessages(config));
  }, [dispatch, page, status, keyword]);

  const handleChangeStatus = (status) => {
    dispatch(setPageMessages(0));
    setStatus(status);
  };

  const handleSetPage = (page) => {
    dispatch(setPageMessages(page));
  };

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
