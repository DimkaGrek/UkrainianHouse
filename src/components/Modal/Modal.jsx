import { useEffect } from 'react';
import { Icon } from '../Icon/Icon';

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
      className="flex items-center justify-center fixed bg-[#FFD437] bg-opacity-40 w-screen h-screen left-0 top-0 z-100"
      onClick={handleClickOnBackdrop}
    >
      <div className="relative bg-white rounded-[30px] py-[50px] px-[50px] h-auto">
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-[20px] right-[20px] w-[20px] h-[20px]"
        >
          <Icon name="close" className="fill-[#1E1E1E]" size="20" />
        </button>
        {children}
      </div>
    </div>
  );
};
