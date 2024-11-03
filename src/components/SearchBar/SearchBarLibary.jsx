// import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { useWindowSizeHook } from '../../helpers/useWindowSizeHook';
import { useEffect, useState } from 'react';
import { getTextForLibrary } from '../../helpers';

export const SearchBarLibary = () => {
  // const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

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

     "
    >
      <input
        type="text"
        placeholder={placeholder}
        name="query"
        {...register('query')}
        className="
        h-[50px]  min-w-[231px]
        md:w-full md:h-[52px]
        md:leading-6 md:text-[#1E1E1E] 

        placeholder:font-istok text-[#666] text-[20px] leading-[1.2] 
        py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-white focus:outline-none md:mr-[8px] 
        
        lg:w-[430px] hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300  "
      />
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
