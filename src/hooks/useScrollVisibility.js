import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

export const useScrollVisibility = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsVisible(window.scrollY > threshold);
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isVisible;
};
