import { useForm } from 'react-hook-form';

export const SearchBar = ({ setQuery }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ query }) => {
    setQuery(query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-4">
      <input
        type="text"
        placeholder="Search..."
        name="query"
        autoComplete="off"
        {...register('query')}
        className="w-full text-[20px] leading-6 text-[#1E1E1E] placeholder:text-[#666] h-[52px] py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-white focus:outline-none hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
      />
      <button
        type="submit"
        className="font-istok font-bold w-[104px] h-[52px] text-[20px] text-[#1e1e1e] border border-[#1e1e1e] rounded-[10px] bg-white py-[10px] px-[18px] hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300"
      >
        Search
      </button>
    </form>
  );
};
