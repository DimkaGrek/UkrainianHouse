import { images } from "../../assets";

export const FlagsList = ({ className }) => {
  const { headerImages } = images;

  const flagData = [
    { key: "eng", alt: "Flag of England" },
    { key: "nl", alt: "Flag of Netherlands" },
    { key: "ua", alt: "Flag of Ukraine" },
  ];

  return (
    <ul className={className}>
      {flagData.map(({ key, alt }) => (
        <li key={key}>
          <img
            srcSet={`${headerImages[`flag_${key}1x`]} 1x, ${headerImages[`flag_${key}2x`]} 2x`}
            src={headerImages[`flag_${key}1x`]}
            alt={alt}
            width="40"
            height="40"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};
