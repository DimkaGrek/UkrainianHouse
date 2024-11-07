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
    });
  };

  return (
    <button
      className="p-[10px] size-[50px] md:size-[54px] flex justify-center items-center bg-blue-600 shadow-lg fixed  z-[49] sm-max:right-5 right-[5%] border-none rounded-full hover:bg-hover-blue focus-visible:bg-hover-blue active:bg-hover-blue"
      style={{
        bottom: isVisible ? '54px' : '-54px',
        transition: 'all 0.350s',
      }}
      type="button"
      onClick={handleClickBtn}
    >
      <Icon className="fill-[white]" name="arrow-up" size={24} />
    </button>
  );
};
