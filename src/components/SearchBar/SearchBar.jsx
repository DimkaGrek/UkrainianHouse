import { MdClear } from "react-icons/md";

import { useSearch } from "../../hooks";

export const SearchBar = ({ setQuery }) => {
  const { query, register, handleSubmit, onSubmit, handleClearClick } = useSearch(setQuery);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex w-full gap-2">
      <input
        type="text"
        placeholder="Search..."
        name="query"
        autoComplete="off"
        {...register("query")}
        className="h-[52px] w-full rounded-[10px] border border-[#b3b3b3] bg-white py-[14px] pl-[18px] pr-[26px] text-[20px] leading-6 text-[#1E1E1E] transition duration-300 placeholder:text-[#666] hover:border-[#ffd437] focus:border-[#ffd437] focus:outline-none"
      />
      {query && (
        <button
          type="button"
          className="absolute right-[120px] top-1/2 -translate-y-1/2"
          onClick={handleClearClick}
        >
          <MdClear size={24} />
        </button>
      )}
      <button
        type="submit"
        className="h-[52px] w-[104px] shrink-0 rounded-[10px] border border-[#1e1e1e] bg-white px-[18px] py-[10px] font-istok text-[20px] font-bold text-[#1e1e1e] transition duration-300 hover:bg-[#ffd437] focus:bg-[#ffd437]"
      >
        Search
      </button>
    </form>
  );
};
