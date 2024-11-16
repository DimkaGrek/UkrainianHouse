import { useEffect, useState } from "react";

export const useWindowSizeHook = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({
        innerWidth: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};
