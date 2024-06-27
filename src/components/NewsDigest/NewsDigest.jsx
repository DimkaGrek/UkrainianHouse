import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNews } from '../../hooks';
import { NewsDigestItem } from 'components';

export const NewsDigest = () => {
  const { announceNews } = useNews();
  const newsfordevelop = [...announceNews, ...announceNews, ...announceNews];

  return (
    <section className="mb-[34px] md:mb-[40px] lg:mb-[100px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {newsfordevelop.map((item, index) => (
          <SwiperSlide key={index}>
            <NewsDigestItem item={item} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-custom"></div>{' '}
      </Swiper>
    </section>
  );
};
