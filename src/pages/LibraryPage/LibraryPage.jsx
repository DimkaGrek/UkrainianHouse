import { useDispatch } from "react-redux";
import { useEffect, useState, useCallback, useRef } from "react";
import { toast } from "react-toastify";

import { LibraryList, NotFoundBook, Loader } from "../../components/";
import { SearchBarLibary } from "../../components/SearchBar/SearchBarLibary";

import { getTextForLibrary } from "../../helpers";
import { useBooks, useWindowSizeHook } from "../../hooks";
import { clearBooks, fetchAllBooks, setPageBooks } from "../../redux";

const LibraryPage = () => {
  const dispatch = useDispatch();

  const { books, page, isLoading, error } = useBooks();

  const [isMoreBooks, setIsMoreBooks] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  useEffect(() => {
    dispatch(clearBooks());
  }, [dispatch]);

  const observerTarget = useRef(null);
  const fetchBooksData = useCallback(() => {
    const config = {
      params: {
        page,
        ...(keyword && { keyword }),
      },
    };
    dispatch(fetchAllBooks(config))
      .unwrap()
      .then((res) => {
        dispatch(setPageBooks(res.currentPage + 1));
        const hasMoreBooks = res.currentPage + 1 < res.totalPages;

        setIsMoreBooks(hasMoreBooks);
        if (!hasMoreBooks && books.length) {
          toast.info("You have reached the end of the news list.");
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, [dispatch, page, books.length, keyword]);

  useEffect(() => {
    if (isSearchTriggered && !isLoading) {
      fetchBooksData();
      setIsSearchTriggered(false);
    }
  }, [isSearchTriggered, fetchBooksData, dispatch, isLoading]);

  useEffect(() => {
    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isMoreBooks && !isLoading && !error) {
          fetchBooksData();
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
  }, [dispatch, fetchBooksData, error, isMoreBooks, page, isLoading]);

  const { innerWidth } = useWindowSizeHook();

  const [explanation, setExplanation] = useState("");
  const { explanations } = getTextForLibrary();

  useEffect(() => {
    setExplanation(innerWidth >= 1440 ? explanations[0] : explanations[1]);
  }, [innerWidth, explanations]);

  const onSearchSubmit = (filterValue) => {
    dispatch(clearBooks());
    setKeyword(filterValue);
    setIsSearchTriggered(true);
  };

  return (
    <section className="pb-[74px] md:pb-[50px] lg:pb-0">
      <div className="mb-[40px] flex flex-col items-center justify-between gap-y-[6px] md:items-end lg:mb-[64px] lg:flex-row">
        <div className="w-full items-center justify-between gap-10 md:flex lg:w-auto lg:justify-start">
          <h3 className="md:font-proza-semibold lg:font-proza-medium hidden md:block md:text-[20px] md:font-semibold md:leading-[160%] md:text-[#1e1e1e] lg:text-[60px] lg:font-medium lg:leading-[130%]">
            Library
          </h3>
          <div className="md:w-[500px] lg:w-auto">
            <SearchBarLibary setQuery={onSearchSubmit} />
          </div>
        </div>

        <p className="font-sans font-istok text-[14px] font-normal leading-[128.571%] text-[#1e1e1e] md:w-[500px] lg:w-[426px] lg:text-[28px]">
          {explanation}
        </p>
      </div>
      {!books.length && keyword && !isLoading ? <NotFoundBook /> : <LibraryList />}

      <div ref={observerTarget}></div>
      {isLoading && <Loader placement="bottom" />}
    </section>
  );
};
export default LibraryPage;
//
// {isLoading && <Loader placement="bottom" />}
