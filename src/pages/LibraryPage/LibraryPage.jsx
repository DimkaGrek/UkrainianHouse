import { useEffect, useState } from "react";

import { LibraryList, NotFoundBook, Loader, SearchBar } from "../../components/";

import { explanations } from "../../constants";
import { useBooks, useInfiniteScroll, useWindowSizeHook } from "../../hooks";
import { clearBooks, fetchAllBooks, setPageBooks } from "../../redux";

const LibraryPage = () => {
  const { books, page, isLoading, error } = useBooks();

  const { keyword, observerTarget, onSearchSubmit } = useInfiniteScroll(
    books,
    page,
    setPageBooks,
    isLoading,
    error,
    fetchAllBooks,
    clearBooks
  );

  const [explanation, setExplanation] = useState("");
  const { innerWidth } = useWindowSizeHook();

  useEffect(() => {
    setExplanation(innerWidth >= 1440 ? explanations[0] : explanations[1]);
  }, [innerWidth]);

  return (
    <section className="pb-[74px] md:pb-[50px] lg:pb-0">
      <div className="mb-[40px] flex flex-col items-center justify-between gap-y-[6px] md:items-end lg:mb-[64px] lg:flex-row">
        <div className="w-full items-center justify-between gap-10 md:flex lg:w-auto lg:justify-start">
          <h3 className="md:font-proza-semibold lg:font-proza-medium hidden md:block md:text-[20px] md:font-semibold md:leading-[160%] md:text-[#1e1e1e] lg:text-[60px] lg:font-medium lg:leading-[130%]">
            Library
          </h3>
          <div className="md:w-[500px] lg:w-[540px]">
            <SearchBar setQuery={onSearchSubmit} />
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
