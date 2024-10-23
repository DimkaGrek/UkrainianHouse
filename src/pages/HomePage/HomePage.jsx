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
import { fetchHomeNews } from '../../my-redux/News/newsOperations';
import {
  selectIsLoadingNews,
  selectHomeNews,
} from '../../my-redux/News/newsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectHomeNews);
  console.log(news);
  const isLoading = useSelector(selectIsLoadingNews);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        await dispatch(fetchHomeNews()).unwrap();
      } catch {
        toast.error('Something went wrong. Please, reload the page.');
      }
    };
    fetchNews();
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-[url('assets/images/home/BgImg_mobile.png')] bg-no-repeat bg-contain  md:bg-[url('assets/images/home/BgImg_tablet.png')] lg:bg-[url('assets/images/home/BgImg_desktop.png')]">
        <Hero />
        <NewsDigest news={news} />
        <AboutUs />
        <GetInvolved />
      </div>
    </>
  );
};

export default HomePage;
