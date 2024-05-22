import { useEffect, useRef, useState } from 'react';

import { Icon } from '../../components';

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'scroll-up-btn opacity-[1] visible' : ' scroll-up-btn'
      }`}
      type="button"
      onClick={handleClickBtn}
    >
      <Icon className="fill-[white]" name="arrow-up" size={24} />
    </button>
  );
};
