// import { Loader } from '../../components';
import { useDispatch } from 'react-redux';
import { SearchBarLibary } from '../../components/SearchBar/SearchBarLibary';
import { fetchAllBooks } from '../../my-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useWindowSizeHook } from '../../helpers/useWindowSizeHook';
import { getTextForLibrary } from '../../helpers';

import { LibraryList } from '../../components/LibraryList/LibraryList';
// import NotFoundBook from '../../components/LibraryList/NotFoundBook';

const LibraryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const config = {
      params: {
        page: 0,
      },
    };
    dispatch(fetchAllBooks(config))
      .unwrap()
      .then(data => {
        console.log('Fetched books data:', data);
      })
      .catch(e => {
        toast.error(e.message);
      });
  }, [dispatch]);

  const { innerWidth } = useWindowSizeHook();

  const [explanation, setExplanation] = useState('');
  const { explanations } = getTextForLibrary();

  useEffect(() => {
    setExplanation(innerWidth >= 1440 ? explanations[0] : explanations[1]);
  }, [innerWidth, explanations]);

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
            <SearchBarLibary />
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

      <LibraryList />
    </section>
  );
};
export default LibraryPage;
// <NotFoundBook />
// {isLoading && <Loader placement="bottom" />}
