import { useForm } from "react-hook-form";
import { useWindowSizeHook } from "../../hooks";
import { useEffect, useState } from "react";
import { getTextForLibrary } from "../../helpers";
import { MdClear } from "react-icons/md";
import { useLocation, useSearchParams } from "react-router-dom";

export const SearchBarLibary = ({ setQuery }) => {
  const { watch, register, setValue, reset, handleSubmit } = useForm();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    reset();
  }, [location.pathname, reset]);

  useEffect(() => {
    const keyword = searchParams.get("keyword");

    if (keyword) {
      setValue("query", keyword);
    }
  }, [searchParams, setValue]);

  const onSubmit = ({ query }) => {
    if (!query) return;
    setQuery(query.trim());
  };

  const handleClearClick = () => {
    reset();
    setQuery("");
    setSearchParams({});
  };

  const query = watch("query");

  const { innerWidth } = useWindowSizeHook();
  const [placeholder, setPlaceholder] = useState("");
  const { placeholders } = getTextForLibrary();
  useEffect(() => {
    setPlaceholder(innerWidth >= 1440 ? placeholders[0] : placeholders[1]);
  }, [innerWidth, placeholders]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex justify-between gap-x-1 md:w-full md:gap-x-0"
    >
      <input
        type="text"
        placeholder={placeholder}
        name="query"
        autoComplete="off"
        {...register("query")}
        className="h-[50px] min-w-[231px] rounded-[10px] border border-[#b3b3b3] bg-white px-[18px] py-[14px] text-[20px] leading-[1.2] text-[#666] transition duration-300 placeholder:font-istok hover:border-[#ffd437] focus:border-[#ffd437] focus:outline-none sm-max:min-w-[220px] md:mr-[8px] md:h-[52px] md:w-full md:leading-6 md:text-[#1E1E1E] lg:w-[430px]"
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
        className="flex h-[50px] w-[90px] items-center justify-center rounded-[10px] border border-[#1e1e1e] bg-white px-[18px] py-[10px] text-[20px] font-bold text-[#1e1e1e] transition duration-300 hover:bg-[#ffd437] focus:bg-[#ffd437] md:h-[52px] md:w-[104px]"
      >
        Search
      </button>
    </form>
  );
};
