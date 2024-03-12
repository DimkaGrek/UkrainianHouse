import { useEffect } from 'react';

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div
      className="flex items-center justify-center fixed bg-yellow-400 bg-opacity-40 w-screen h-screen left-0 top-0 z-100"
      onClick={handleClickOnBackdrop}
    >
      <div className="relative bg-white rounded-[30px] py-[35px] px-[80px] h-auto">
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-[25px] right-[25px] w-[32px] h-[32px] bg-red-500"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
