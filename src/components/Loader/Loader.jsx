import { SpinnerCircularFixed } from "spinners-react";

export const Loader = ({ placement = "backdrop", size = 60 }) => {
  const loaderOptions = {
    className:
      placement === "backdrop"
        ? "fixed w-full h-full flex justify-center items-center top-0 left-0 bg-black bg-opacity-50 z-50"
        : placement === "bottom"
          ? "flex justify-center"
          : "absolute top-1/2 right-3 transform -translate-y-1/2",
  };

  return (
    <div className={`${loaderOptions.className} `}>
      <SpinnerCircularFixed
        size={size}
        thickness={400}
        speed={100}
        color="#1c4a8a"
        secondaryColor="rgba(247, 230, 43, 0.837)"
      />
    </div>
  );
};
