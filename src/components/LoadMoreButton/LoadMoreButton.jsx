export const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="mx-auto block h-[44px] w-[100%] rounded-[10px] border border-[#1e1e1e] bg-[#fff] bg-transparent px-[18px] py-[10px] text-center font-istok text-[16px] font-bold leading-[150%] text-[#1e1e1e] transition duration-300 hover:border-transparent hover:bg-[#2355cc] hover:text-[#fff] focus:border-transparent focus:bg-[#2355cc] focus:text-[#fff] md:w-[118px] lg:h-[52px] lg:w-[138px] lg:py-[9px] lg:leading-[170%]"
      onClick={onClick}
    >
      Load More
    </button>
  );
};
