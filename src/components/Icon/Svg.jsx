export const Svg = ({ children, className, size = "32", viewbox = "32" }) => {
  return (
    <svg
      fill="white"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${viewbox} ${viewbox}`}
    >
      {children}
    </svg>
  );
};
