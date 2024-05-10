import { useEffect } from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import Activities from '../../components/Activities/Activities';
import Hero from '../../components/Hero/Hero';
import NewsDigest from '../../components/NewsDigest/NewsDigest';
import { useDispatch } from 'react-redux';
import { fetchAllNews } from '../../my-redux/News/operations';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNews({ status: 'published', page: 1, limit: 3 }));
  }, [dispatch]);
  return (
    <main>
      <Hero />
      <NewsDigest />
      <AboutUs />
      <Activities />
    </main>
  );
};

export default Home;
