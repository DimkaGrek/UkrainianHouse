import ReactDOM from "react-dom";

import { Icon } from "../../components";
import { useModalLogic } from "../../hooks";

const modalRoot = document.querySelector("#modalRoot");
export const Modal = ({ children, toggleModal, className = "" }) => {
   const { handleBackdropClick } = useModalLogic(toggleModal);

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-[49] flex h-full w-full items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
      onClick={handleBackdropClick}
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
