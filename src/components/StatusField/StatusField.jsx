import { useEffect, useRef, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { getCapitalizedWord } from '../../helpers';

export const StatusField = ({
  statuses,
  setStatus,
  status,
  showLabel = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(getCapitalizedWord(status));
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
    setValue(getCapitalizedWord(status));
    setStatus(status);
    setIsOpen(false);
  };

  const handleIconClick = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {showLabel && <p className="label mb-[6px]">Status</p>}
      <div
        className={`text-[20px] leading-[24px] min-h-[54px] min-w-[200px] w-full py-[14px] px-[18px] border border-solid border-my-black5 rounded-[10px] cursor-pointer bg-white ${
          isOpen ? 'border-my-yellow' : ''
        }`}
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <span
          className={`absolute top-[${
            showLabel ? '46px' : '18px'
          }] right-5 cursor-pointer`}
        >
          <IoIosArrowUp
            className={`size-5 transition duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            onClick={e => handleIconClick(e)}
          />
        </span>
      </div>
      {isOpen && (
        <div className="w-full absolute top-[90px] border border-solid border-[#1C1C1C] rounded-[10px] bg-white p-[2px] max-h-[218px] overflow-auto shadow-sm z-50 scrollbar">
          <ul className="font-istok font-normal text-[20px] leading-[24px] w-full flex flex-col gap-[2px]">
            {statuses &&
              statuses.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleChangeStatus(option)}
                  className={`w-full p-[10px] cursor-pointer hover:bg-my-yellow rounded-[10px] hover:transition-all ${
                    option.toLowerCase() === value.toLowerCase()
                      ? 'bg-yellow-200'
                      : ''
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
