export const Svg = ({ children, className, size }) => {
  return (
    <svg
      fill="white"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '32'}
      height={size ? size : '32'}
      viewBox="0 0 32 32"
    >
      {children}
    </svg>
  );
};
