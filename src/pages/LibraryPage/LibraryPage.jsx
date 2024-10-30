// import { Loader } from '../../components';
import { useDispatch } from 'react-redux';
import { SearchBarLibary } from '../../components/SearchBar/SearchBarLibary';
import { fetchAllBooks } from '../../my-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { LibraryList } from '../../components/LibraryList/LibraryList';
// import NotFoundBook from '../../components/LibraryList/NotFoundBook';

const LibraryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const config = {
      params: { page: 0 },
    };
    dispatch(fetchAllBooks(config))
      .unwrap()
      .then(() => {})
      .catch(e => {
        toast.error(e.message);
      });
  }, [dispatch]);

  return (
    <section className="pb-[74px] md:pb-[50px] lg:pb-[110px]">
      <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb-[64px]">
        <h3 className="font-proza-semibold font-semibold text-[20px] text-[#1e1e1e] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]">
          Library
        </h3>
        <SearchBarLibary />

        <p className="font-istok font-normal text-[28px] leading-[128.571%] text-[#1e1e1e] w-[426px]">
          Here you can find your favorite book waiting for you in our library
        </p>
      </div>

      <LibraryList />

      {/* <NotFoundBook /> */}
      {/* {isLoading && <Loader placement="bottom" />} */}
    </section>
  );
};
export default LibraryPage;
