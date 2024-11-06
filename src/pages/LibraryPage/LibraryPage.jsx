// import { Loader } from '../../components';
import { useDispatch } from 'react-redux';
import { SearchBarLibary } from '../../components/SearchBar/SearchBarLibary';
import { clearBooks, fetchAllBooks, setPageBooks } from '../../my-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useWindowSizeHook } from '../../helpers/useWindowSizeHook';
import { getTextForLibrary } from '../../helpers';

import { LibraryList } from '../../components/LibraryList/LibraryList';
import { useBooks } from '../../hooks';
import { Loader } from '../../components';
import NotFoundBook from '../../components/LibraryList/NotFoundBook';

const LibraryPage = () => {
  const dispatch = useDispatch();

  const { books, page, isLoading, error } = useBooks();

  const [isMoreBooks, setIsMoreBooks] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  useEffect(() => {
    dispatch(clearBooks());
    console.log('шось тут є');
  }, [dispatch]);

  const observerTarget = useRef(null);
  console.log(books);
  const fetchBooksData = useCallback(() => {
    const config = {
      params: {
        page,
        ...(keyword && { keyword }),
      },
    };
    dispatch(fetchAllBooks(config))
      .unwrap()
      .then(res => {
        dispatch(setPageBooks(res.currentPage + 1));
        const hasMoreBooks = res.currentPage + 1 < res.totalPages;

        setIsMoreBooks(hasMoreBooks);
        if (!hasMoreBooks && books.length) {
          console.log('You have reached the end of the news list.');
        }
      })
      .catch(e => {
        toast.error(e.message);
      });
  }, [dispatch, page, books.length, keyword]);

  // useEffect(() => {
  //   const config = {
  //     params: {
  //       page: 0,
  //     },
  //   };
  //   dispatch(fetchAllBooks(config))
  //     .unwrap()
  //     .then(data => {
  //       console.log('Fetched books data:', data);
  //     })
  //     .catch(e => {
  //       toast.error(e.message);
  //     });
  // }, [dispatch]);

  useEffect(() => {
    if (isSearchTriggered && !isLoading) {
      fetchBooksData();
      setIsSearchTriggered(false);
    }
  }, [isSearchTriggered, fetchBooksData, dispatch, isLoading]);

  useEffect(() => {
    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      entries => {
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

  const [explanation, setExplanation] = useState('');
  const { explanations } = getTextForLibrary();

  useEffect(() => {
    setExplanation(innerWidth >= 1440 ? explanations[0] : explanations[1]);
  }, [innerWidth, explanations]);

  const onSearchSubmit = filterValue => {
    dispatch(clearBooks());
    setKeyword(filterValue);
    setIsSearchTriggered(true);
  };

  return (
    <section
      className="pb-[74px] md:pb-[50px] lg:pb-[110px] 
    "
    >
      <div
        className=" flex flex-col gap-y-[6px] 
     md:items-end lg:flex-row justify-between items-center mb-[40px] lg:mb-[64px]"
      >
        <div
          className="w-full md:flex justify-between items-center
           lg:justify-start gap-10 lg:w-auto "
        >
          <h3
            className="hidden md:block md:font-proza-semibold md:font-semibold md:text-[20px] md:text-[#1e1e1e] md:leading-[160%] 
           lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]"
          >
            Library
          </h3>
          <div className="md:w-[500px] lg:w-auto ">
            <SearchBarLibary setQuery={onSearchSubmit} />
          </div>
        </div>

        <p
          className=" font-sans font-istok font-normal text-[14px] 
        md:w-[500px] 
        lg:text-[28px] leading-[128.571%] text-[#1e1e1e] lg:w-[426px] "
        >
          {explanation}
        </p>
      </div>
      {!books.length && keyword && !isLoading ? (
        <NotFoundBook />
      ) : (
        <LibraryList />
      )}

      <div ref={observerTarget}></div>
      {isLoading && <Loader placement="bottom" />}
    </section>
  );
};
export default LibraryPage;
//
// {isLoading && <Loader placement="bottom" />}
