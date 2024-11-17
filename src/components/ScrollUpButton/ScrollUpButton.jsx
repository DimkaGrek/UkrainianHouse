import { Icon } from "../../components";

import { useScrollVisibility } from "../../hooks";

export const ScrollUpBtn = () => {
  const isVisible = useScrollVisibility(300);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      className="fixed right-[5%] z-[49] flex size-[50px] items-center justify-center rounded-full border-none bg-blue-600 p-[10px] shadow-lg hover:bg-hover-blue focus-visible:bg-hover-blue active:bg-hover-blue sm-max:right-5 md:size-[54px]"
      style={{
        bottom: isVisible ? "54px" : "-54px",
        transition: "all 0.350s",
      }}
      type="button"
      onClick={handleClickBtn}
    >
      <Icon className="fill-[white]" name="arrow-up" size={24} />
    </button>
  );
};
