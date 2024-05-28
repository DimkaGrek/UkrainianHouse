import { useEffect } from 'react';

import { Icon } from '../Icon/Icon';

export const Modal = ({ children, toggleModal, className }) => {
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
  const newsModal =
    className === 'news-modal'
      ? 'py-[58px] pl-[20px] pr-[10px] bg-[#FFFFFF] md:py-[58px] md:pl-[40px] md:pr-[25px]'
      : 'p-[44px] bg-[#DAEFFF]';

  return (
    <div
      className="flex items-center justify-center fixed bg-black backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50 "
      onClick={handleClickOnBackdrop}
    >
      <div
        className={`${newsModal} relative rounded-[24px] sm-max:max-w-[300px] max-w-[350px] md:max-w-[704px] lg:max-w-[1240px] max-h-[95%] overflow-hidden`}
      >
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
