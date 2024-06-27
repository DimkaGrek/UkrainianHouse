import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getPartnersLogos } from '../../helpers';
import Slider from 'react-slick';
export const PartnersSlider = () => {
  const partnersLogos = getPartnersLogos();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };
  return (
    <div className="slider-custom">
      <Slider {...settings}>
        {partnersLogos.map(({ logos }, index) => (
          <div key={index} className="slider-item-custom">
            <img
              src={logos[0]}
              srcSet={`${logos[0]} 1x, ${logos[1]} 2x`}
              alt="Partner's logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
