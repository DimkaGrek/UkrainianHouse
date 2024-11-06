import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MdClear } from 'react-icons/md';

export const SearchBar = ({ setQuery }) => {
  const { watch, register, setValue, reset, handleSubmit } = useForm();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    reset();
  }, [location.pathname, reset]);

  useEffect(() => {
    const keyword = searchParams.get('keyword');

    if (keyword) {
      setValue('query', keyword);
    }
  }, [searchParams, setValue]);

  const onSubmit = ({ query }) => {
    if (!query) return;
    setQuery(query.trim());
  };

  const handleClearClick = () => {
    reset();
    setQuery('');
    setSearchParams({});
  };

  const query = watch('query');
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full flex gap-2"
    >
      <input
        type="text"
        placeholder="Search..."
        name="query"
        autoComplete="off"
        {...register('query')}
        className="w-full text-[20px] leading-6 text-[#1E1E1E] placeholder:text-[#666] h-[52px] py-[14px] pl-[18px] pr-[26px] border border-[#b3b3b3] rounded-[10px] bg-white focus:outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
      />
      {query && (
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-[120px] outline outline-[1px] outline-red-500"
          onClick={handleClearClick}
        >
          <MdClear size={24} />
        </button>
      )}
      <button
        type="submit"
        className="shrink-0 font-istok font-bold w-[104px] h-[52px] text-[20px] text-[#1e1e1e] border border-[#1e1e1e] rounded-[10px] bg-white py-[10px] px-[18px] hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300"
      >
        Search
      </button>
    </form>
  );
};
