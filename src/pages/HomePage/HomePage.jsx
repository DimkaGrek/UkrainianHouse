import { useEffect } from 'react';
import { Hero, GetInvolved, AboutUs, NewsDigest } from '../../components';
import { useDispatch } from 'react-redux';
import { fetchAllNews } from '../../my-redux/News/newsOperations';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNews({ status: 'published', page: 1, limit: 3 }));
  }, [dispatch]);

  return (
    <div className="bg-[url('assets/images/home/BgImg_mobile.png')] bg-no-repeat bg-contain lg:bg-center md:bg-[url('assets/images/home/BgImg_tablet.png')] lg:bg-[url('assets/images/home/BgImg_desktop.png')]">
      <Hero />
      <NewsDigest />
      <AboutUs />
      <GetInvolved />
    </div>
  );
};

export default HomePage;
