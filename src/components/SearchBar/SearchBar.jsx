export const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        className="font-normal text-[20px] leading-6 text-[#666] w-[388px] h-[52px] py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-white focus:outline-none mr-[8px] lg:w-[542px]"
      />
      <button
        type="submit"
        className="w-[104px] h-[54px] font-bold text-[20px] text-[#1e1e1e] border border-[#1e1e1e] rounded-[10px] bg-white py-[10px] px-[18px]"
      >
        Search
      </button>
    </form>
  );
};
