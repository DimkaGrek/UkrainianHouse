import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Hero,
  GetInvolved,
  AboutUs,
  NewsDigest,
  Loader,
} from '../../components';
import { fetchAllNews } from '../../my-redux/News/newsOperations';
import {
  selectIsLoadingNews,
  clearNews,
  selectNews,
} from '../../my-redux/News/newsSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoadingNews);

  useEffect(() => {
    dispatch(clearNews());
  }, [dispatch]);

  useEffect(() => {
    const fetchNews = async () => {
      const config = {
        params: { page: 0, size: 3, status: 'PUBLISHED' },
      };
      try {
        await dispatch(fetchAllNews(config)).unwrap();
      } catch {
        toast.error('Something went wrong. Please, reload the page.');
      }
    };
    fetchNews();
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-[url('assets/images/home/BgImg_mobile.webp')] bg-no-repeat bg-contain  md:bg-[url('assets/images/home/BgImg_tablet.webp')] lg:bg-[url('assets/images/home/BgImg_desktop.webp')]">
        <Hero />
        <NewsDigest news={news} />
        <AboutUs />
        <GetInvolved />
      </div>
    </>
  );
};

export default HomePage;
