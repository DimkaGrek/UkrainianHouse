import { images } from "../../assets";

export const FlagsList = ({ className }) => {
  const { headerImages } = images;
  
  return (
    <ul className={className}>
      <li>
        <img
          srcSet={`${headerImages.flag_eng1x} 1x, ${headerImages.flag_eng2x} 2x`}
          src={headerImages.flag_eng1x}
          alt="Flag of England"
          width="40"
          height="40"
          loading="lazy"
        />
      </li>
      <li>
        <img
          srcSet={`${headerImages.flag_nl1x} 1x, ${headerImages.flag_nl2x} 2x`}
          src={headerImages.flag_nl1x}
          alt="Flag of Netherland"
          width="40"
          height="40"
          loading="lazy"
        />
      </li>
      <li>
        <img
          srcSet={`${headerImages.flag_ua1x} 1x, ${headerImages.flag_ua2x} 2x`}
          src={headerImages.flag_ua1x}
          alt="Flag of Ukraine"
          width="40"
          height="40"
          loading="lazy"
        />
      </li>
    </ul>
  );
};
