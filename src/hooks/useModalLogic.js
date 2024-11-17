import { useEffect } from "react";

export const useModalLogic = (toggleModal) => {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.classList.add("no-scroll");

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("no-scroll");
    };
  }, [toggleModal]);

  return { handleBackdropClick };
};
