import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

import { Icon } from '../../components';

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    }, 500);

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
        isVisible ? 'scroll-up-btn bottom-[54px]' : ' scroll-up-btn'
      }`}
      type="button"
      onClick={handleClickBtn}
    >
      <Icon className="fill-[white]" name="arrow-up" size={24} />
    </button>
  );
};
