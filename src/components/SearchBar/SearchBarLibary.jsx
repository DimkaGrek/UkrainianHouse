import { useForm } from 'react-hook-form';
import { useWindowSizeHook } from '../../helpers/useWindowSizeHook';
import { useEffect, useState } from 'react';
import { getTextForLibrary } from '../../helpers';
import { MdClear } from 'react-icons/md';
import { useLocation, useSearchParams } from 'react-router-dom';

export const SearchBarLibary = ({ setQuery }) => {
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

  const { innerWidth } = useWindowSizeHook();
  const [placeholder, setPlaceholder] = useState('');
  const { placeholders } = getTextForLibrary();
  useEffect(() => {
    setPlaceholder(innerWidth >= 1440 ? placeholders[0] : placeholders[1]);
  }, [innerWidth, placeholders]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-between gap-x-1 md:gap-x-0 md:w-full
relative
     "
    >
      <input
        type="text"
        placeholder={placeholder}
        name="query"
        autoComplete="off"
        {...register('query')}
        className="
        h-[50px]     min-w-[231px] sm-max:min-w-[220px]
        md:w-full md:h-[52px]
        md:leading-6 md:text-[#1E1E1E] 

        placeholder:font-istok text-[#666] text-[20px] leading-[1.2] 
        py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-white focus:outline-none md:mr-[8px] 
        
        lg:w-[430px] hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300  "
      />
      {query && (
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-[120px] "
          onClick={handleClearClick}
        >
          <MdClear size={24} />
        </button>
      )}
      <button
        type="submit"
        className=" flex justify-center items-center w-[90px] h-[50px]

        md:w-[104px] md:h-[52px] font-bold text-[20px] text-[#1e1e1e] border border-[#1e1e1e] rounded-[10px] bg-white py-[10px] px-[18px] hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300"
      >
        Search
      </button>
    </form>
  );
};
