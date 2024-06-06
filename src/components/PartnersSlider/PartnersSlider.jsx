import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { getPartnersLogos } from '../../helpers';

export const PartnersSlider = () => {
  const partnersLogos = getPartnersLogos();

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1000}
      itemClass="carousel-item"
      customTransition="all 5s linear"
      focusOnSelect={false}
      infinite
      centerMode={false}
      //   renderArrowsWhenDisabled={false}
      //   renderButtonGroupOutside={false}
      //   renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1440,
          },
          items: 3,
          //   partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: {
            max: 1439.99,
            min: 768,
          },
          items: 5,
          //   partialVisibilityGutter: 100,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={true}
      //   shouldResetAutoplay
      showDots={false}
      sliderClass="carousel-list"
      slidesToSlide={1}
      swipeable
      transitionDuration={1}
    >
      {partnersLogos.map(({ logos }, index) => (
        <div
          key={index}
          className="hidden  md:flex items-center justify-center h-[73px] w-[122px]"
        >
          <img
            src={logos[0]}
            srcSet={`${logos[0]} 1x, ${logos[1]} 2x`}
            alt="Partner's logo"
          />
        </div>
      ))}
    </Carousel>
  );
};
