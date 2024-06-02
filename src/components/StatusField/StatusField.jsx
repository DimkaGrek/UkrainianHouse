import { useEffect, useRef, useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const StatusField = ({ statuses, setStatus, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(status);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleCloseList = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, []);

  const handleChangeStatus = status => {
    setValue(status);
    setStatus(status);
    setIsOpen(false);
  };

  const handleIconClick = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <p className="label mb-[6px]">Status</p>
      <div
        className={`text-[20px] leading-[24px] min-h-[56px] w-full py-[14px] px-[18px] border border-solid border-my-black5 rounded-[10px] cursor-pointer bg-white ${
          isOpen ? 'border-my-yellow' : ''
        }`}
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <span className="absolute top-[46px] right-5 cursor-pointer">
          {isOpen ? (
            <IoIosArrowUp
              className="size-5"
              onClick={e => handleIconClick(e)}
            />
          ) : (
            <IoIosArrowDown
              className="size-5"
              onClick={e => handleIconClick(e)}
            />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="w-full absolute top-[90px] border border-solid border-[#1C1C1C] rounded-[10px] bg-[#f0f0f0] p-[2px] max-h-[218px] overflow-scroll">
          <ul className="font-istok font-normal text-[20px] leading-[24px] w-full flex flex-col gap-[2px]">
            {statuses &&
              statuses.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleChangeStatus(option)}
                  className={`w-full p-[10px] cursor-pointer hover:bg-my-yellow rounded-[10px] ${
                    option === value ? 'bg-yellow-200' : ''
                  }`}
                >
                  {option}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
