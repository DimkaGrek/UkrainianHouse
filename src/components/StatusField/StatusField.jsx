import { useEffect, useRef, useState } from 'react';

export const StatusField = ({ statuses, setStatus, status }) => {
  const [inputValue, setInputValue] = useState(status);
  const [isOpenStatusList, setIsOpenStatusList] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    const handleCloseList = e => {
      if (e.target !== dropdown.current) {
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
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative w-[400px]">
      <p className="font-istok font-normal text-[16px] leading-[22px] mb-[4px]">
        Status:
      </p>
      <input
        type="text"
        className="fieldStyles cursor-pointer"
        readOnly
        value={inputValue}
        ref={dropdown}
        onChange={handleInputChange}
        onClick={() => setIsOpenStatusList(!isOpenStatusList)}
      />
      {isOpenStatusList && (
        <div className="w-full absolute top-[90px] border border-solid border-[#1C1C1C] rounded-[10px] bg-slate-100">
          <ul className="font-istok font-normal text-[20px] leading-[24px] w-full">
            {statuses &&
              statuses.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleChangeStatus(option)}
                  className={`w-full p-[10px] cursor-pointer hover:bg-[#FFD437] rounded-[10px] ${
                    option === inputValue ? 'bg-slate-300' : ''
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
