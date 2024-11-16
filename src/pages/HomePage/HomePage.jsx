import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { images } from "../../assets";
import { Hero, GetInvolved, AboutUs, NewsDigest, Loader } from "../../components";

import { fetchAllNews, clearNews } from "../../redux";
import { useNews } from "../../hooks";

const HomePage = () => {
  const dispatch = useDispatch();
  const { news, isLoading } = useNews();
  const { homeImages } = images;
  useEffect(() => {
    dispatch(clearNews());
  }, [dispatch]);

  useEffect(() => {
    const fetchNews = async () => {
      const config = {
        params: { page: 0, size: 3, status: "PUBLISHED" },
      };
      try {
        await dispatch(fetchAllNews(config)).unwrap();
      } catch {
        toast.error("Something went wrong. Please, reload the page.");
      }
    };
    fetchNews();
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative">
        <picture className="absolute left-[10px] top-0 z-[-1] md:left-[20px] lg:left-[100px]">
          <source
            media="(min-width: 1440px)"
            srcSet={homeImages.BgImg_desktop}
            height="1711"
            width="1040"
            loading="lazy"
          />
          <source
            media="(min-width: 768px)"
            srcSet={homeImages.BgImg_tablet}
            height="1093"
            width="664"
            loading="lazy"
          />
          <img
            src={homeImages.BgImg_mobile}
            height="525"
            width="319"
            alt={`Photo of Tryzub`}
            loading="lazy"
          />
        </picture>

        <Hero />
        <NewsDigest news={news} />
        <AboutUs />
        <GetInvolved />
      </div>
    </>
  );
};

export default HomePage;
