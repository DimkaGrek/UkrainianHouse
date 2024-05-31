import { useEffect, useRef, useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const StatusField = ({ statuses, setStatus, status }) => {
  const [inputValue, setInputValue] = useState(status);
  const [isOpenStatusList, setIsOpenStatusList] = useState(false);
  const dropdown = useRef(null);
  const arrow = useRef(null);

  useEffect(() => {
    const handleCloseList = e => {
      if (e.target !== dropdown.current && e.target !== arrow.current) {
        setIsOpenStatusList(false);
      }
    };

    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, []);

  const handleChangeStatus = status => {
    setInputValue(status);
    setStatus(status.toUpperCase());
    setIsOpenStatusList(false);
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative">
      <label className="label">
        Status:
        <input
          type="text"
          className="field cursor-pointer"
          readOnly
          value={inputValue}
          ref={dropdown}
          onChange={handleInputChange}
          onClick={() => setIsOpenStatusList(!isOpenStatusList)}
        />
        <span
          className="absolute top-[46px] right-5 cursor-pointer"
          onClick={() => setIsOpenStatusList(!isOpenStatusList)}
          ref={arrow}
        >
          {isOpenStatusList ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </span>
      </label>
      {isOpenStatusList && (
        <div className="w-full absolute top-[90px] border border-solid border-[#1C1C1C] rounded-[10px] bg-[#f0f0f0] p-[2px]">
          <ul className="font-istok font-normal text-[20px] leading-[24px] w-full flex flex-col gap-[2px]">
            {statuses &&
              statuses.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleChangeStatus(option)}
                  className={`w-full p-[10px] cursor-pointer hover:bg-my-yellow rounded-[10px] ${
                    option === inputValue ? 'bg-yellow-200' : ''
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
