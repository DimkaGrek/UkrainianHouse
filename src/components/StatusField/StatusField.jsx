import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import { getCapitalizedWord } from "../../helpers";

export const StatusField = ({ statuses, setStatus, status, showLabel = true }) => {
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
    setStatus(status);
    setIsOpen(false);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {showLabel && <p className="label mb-[6px]">Status</p>}
      <div
        className={`min-h-[54px] w-full min-w-[200px] cursor-pointer rounded-[10px] border border-solid border-my-black5 bg-white px-[18px] py-[14px] text-[20px] leading-[24px] ${
          isOpen ? "border-my-yellow" : ""
        }`}
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <span className={`absolute top-[${showLabel ? "46px" : "18px"}] right-5 cursor-pointer`}>
          <IoIosArrowUp
            className={`size-5 transition duration-300 ${isOpen ? "" : "rotate-180"}`}
            onClick={(e) => handleIconClick(e)}
          />
        </span>
      </div>
      {isOpen && (
        <div
          className={`absolute w-full ${
            showLabel ? "top-[90px]" : "top-[62px]"
          } scrollbar z-50 max-h-[240px] overflow-auto rounded-[10px] border border-solid border-[#1C1C1C] bg-white p-[2px] shadow-sm`}
        >
          <ul className="flex w-full flex-col gap-[2px] font-istok text-[20px] font-normal leading-[24px]">
            {statuses &&
              statuses.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleChangeStatus(option)}
                  className={`w-full cursor-pointer rounded-[10px] p-[10px] hover:bg-my-yellow hover:transition-all ${
                    option.toLowerCase() === value.toLowerCase() ? "bg-yellow-200" : ""
                  }`}
                >
                  {getCapitalizedWord(option)}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
