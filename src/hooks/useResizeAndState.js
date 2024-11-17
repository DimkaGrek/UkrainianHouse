import { useState, useEffect } from 'react';

export const useResizeAndState = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState({
    mission: true,
    vision: true,
    areas: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      setIsOpen({
        mission: true,
        vision: true,
        areas: true,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowWidth, isOpen, setIsOpen };
};
