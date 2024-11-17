import { useEffect } from "react";

export const useModalLogic = (toggleFn, isOpen) => {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleFn();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.code === "Escape") {
        toggleFn();
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, toggleFn]);

  return { handleBackdropClick };
};
