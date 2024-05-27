export const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="block mx-auto w-[100%] h-[44px] py-[10px] px-[18px] bg-transparent border border-[#1e1e1e] rounded-[10px] bg-[#fff] font-istok  font-bold text-[16px] text-[#1e1e1e] leading-[150%] text-center md:w-[118px] lg:w-[138px] lg:h-[52px] lg:py-[9px] lg:leading-[170%] hover:text-[#fff] hover:bg-[#2355cc] focus:text-[#fff] focus:bg-[#2355cc] hover:border-transparent focus:border-transparent  transition duration-300"
      onClick={onClick}
    >
      Load More
    </button>
  );
};
