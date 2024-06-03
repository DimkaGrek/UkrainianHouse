import flag_eng1x from '../../assets/images/header/flag_eng1x.png';
import flag_eng2x from '../../assets/images/header/flag_eng2x.png';
import flag_ua1x from '../../assets/images/header/flag_ua1x.png';
import flag_ua2x from '../../assets/images/header/flag_ua2x.png';
import flag_nl1x from '../../assets/images/header/flag_nl1x.png';
import flag_nl2x from '../../assets/images/header/flag_nl2x.png';

export const FlagsList = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <img
          srcSet={`${flag_eng1x} 1x, ${flag_eng2x} 2x`}
          src={flag_eng1x}
          alt="Flag of England"
          width="40"
          height="40"
          loading="lazy"
        />
      </li>
      <li>
        <img
          srcSet={`${flag_nl1x} 1x, ${flag_nl2x} 2x`}
          src={flag_nl1x}
          alt="Flag of Netherland"
          width="40"
          height="40"
          loading="lazy"
        />
      </li>
      <li>
        <img
          srcSet={`${flag_ua1x} 1x, ${flag_ua2x} 2x`}
          src={flag_ua1x}
          alt="Flag of Ukraine"
          width="40"
          height="40"
          loading="lazy"
        />
      </li>
    </ul>
  );
};
