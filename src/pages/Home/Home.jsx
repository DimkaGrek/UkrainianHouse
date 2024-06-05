import { useEffect } from 'react';
import { Hero, Activities, AboutUs, NewsDigest } from '../../components';
import { useDispatch } from 'react-redux';
import { fetchAllNews } from '../../my-redux/News/newsOperations';

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
