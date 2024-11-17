import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { PAGE_LIMIT } from "../constants";

export const useAdminPage = (page, defaultStatuses, clear, fetch, setPage) => {
  const [status, setStatus] = useState("Show All");
  const [statuses, setStatuses] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const keyword = searchParams.get("keyword");

  useEffect(() => {
    setStatuses(["Show All", ...defaultStatuses]);
  }, [defaultStatuses]);

  useEffect(() => {
    dispatch(clear());
  }, [clear, dispatch]);

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

    dispatch(fetch(config));
  }, [dispatch, page, keyword, status, fetch]);

  const handleChangeStatus = (status) => {
    dispatch(setPage(0));
    setStatus(status);
  };

  const handleSetPage = (page) => {
    dispatch(setPage(page));
  };

  return {
    status,
    statuses,
    keyword,
    handleChangeStatus,
    handleSetPage,
  };
};
