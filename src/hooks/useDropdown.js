import { useEffect, useRef, useState } from "react";

import { getCapitalizedWord } from "../helpers";

export const useDropdown = (status) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(getCapitalizedWord(status));
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleCloseList = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleCloseList);
    return () => {
      document.removeEventListener("click", handleCloseList);
    };
  }, []);

  const handleChangeStatus = (status) => {
    setValue(getCapitalizedWord(status));
    setIsOpen(false);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    value,
    dropdownRef,
    handleChangeStatus,
    handleIconClick,
  };
};
