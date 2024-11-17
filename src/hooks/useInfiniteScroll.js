import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const useInfiniteScroll = (
  items,
  page,
  setPage,
  isLoading,
  error,
  fetchItems,
  clearItems,
  fetchAnnounce
) => {
  const [isMoreItems, setIsMoreItems] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  const dispatch = useDispatch();

  const observerTarget = useRef(null);

  const fetchData = useCallback(() => {
    const config = {
      params: {
        page,
        status: "PUBLISHED",
        ...(keyword && { keyword }),
      },
    };
    dispatch(fetchItems(config))
      .unwrap()
      .then((res) => {
        dispatch(setPage(res.currentPage + 1));

        const hasMoreItems = res.currentPage + 1 < res.totalPages;
        setIsMoreItems(hasMoreItems);
        if (!hasMoreItems && items.length) {
          toast.info("You have reached the end of the list.");
        }
      })
      .catch((e) => toast.error(e.message));
  }, [page, keyword, dispatch, fetchItems, setPage, items.length]);

  useEffect(() => {
    dispatch(clearItems());
    if (fetchAnnounce) {
      dispatch(fetchAnnounce())
        .unwrap()
        .then()
        .catch((e) => toast.error(e.message));
    }
  }, [clearItems, dispatch, fetchAnnounce]);

  useEffect(() => {
    if (isSearchTriggered && !isLoading) {
      fetchData();
      setIsSearchTriggered(false);
    }
  }, [isSearchTriggered, fetchData, dispatch, isLoading]);

  useEffect(() => {
    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isMoreItems && !isLoading && !error) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [dispatch, fetchData, error, isMoreItems, keyword, page, isLoading]);

  const onSearchSubmit = (filterValue) => {
    dispatch(clearItems());
    setKeyword(filterValue);
    setIsSearchTriggered(true);
  };
  return {
    keyword,
    observerTarget,
    onSearchSubmit,
  };
};
