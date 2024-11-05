import { useSearchParams } from 'react-router-dom';

import { InfoMessageTypes } from '../../constants';

export const InfoMessage = ({ type, messageText = '', searchValue = '' }) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const getMessage = () => {
    switch (type) {
      case InfoMessageTypes.Empty:
        return `The list is empty. ${messageText}`;
      case InfoMessageTypes.NoResults:
        return `No results for "${searchValue || keyword}".`;

      default:
        break;
    }
  };

  return (
    <div
      className={`${
        messageText && 'h-[60vh]'
      } w-full flex items-center justify-center`}
    >
      <p className="text-[#1a1a1a] text-[32px] lg:text-[40px] font-bold leading-[1.3]">
        {getMessage()}
      </p>
    </div>
  );
};
