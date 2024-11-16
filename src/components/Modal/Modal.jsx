import ReactDOM from "react-dom";
import { useEffect } from "react";

import { Icon } from "../../components";

const modalRoot = document.querySelector("#modalRoot");
export const Modal = ({ children, toggleModal, className = "" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-[49] flex h-full w-full items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
      onClick={handleClickOnBackdrop}
    >
      <div
        className={`relative max-h-[95%] max-w-[350px] overflow-hidden rounded-[24px] bg-my-lightblue p-[44px] sm-max:max-w-[300px] md:max-w-[704px] lg:max-w-[1240px] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute right-[20px] top-[20px] h-[20px] w-[20px]"
        >
          <Icon name="close" className="fill-[#1E1E1E]" size="20" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
