export const InfoMessage = ({ messageText = "", keyword = "", status = "Show All" }) => {
  const getMessage = () => {
    if (keyword) return `No results for "${keyword}".`;

    if (status !== "Show All") return `No results for items with the status "${status}".`;

    return `The list is empty. ${messageText}`;
  };

  return (
    <div className={`${messageText && "h-[60vh]"} flex w-full items-center justify-center`}>
      <p className="text-center text-[32px] font-bold leading-[1.3] text-[#1a1a1a] lg:text-[40px]">
        {getMessage()}
      </p>
    </div>
  );
};
