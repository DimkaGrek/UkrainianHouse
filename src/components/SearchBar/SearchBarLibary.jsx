import { useDispatch } from 'react-redux';
import { changeFilter } from '../../my-redux';
import { useForm } from 'react-hook-form';

export const SearchBarLibary = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ query }) => {
    dispatch(changeFilter(query));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        name="query"
        {...register('query')}
        className="font-normal text-[20px] leading-6 text-[#1E1E1E] placeholder:text-[#666] w-[388px] h-[52px] py-[14px] px-[18px] border border-[#b3b3b3] rounded-[10px] bg-white focus:outline-none mr-[8px] lg:w-[430px] hover:border-[#ffd437] focus:border-[#ffd437] transition duration-300"
      />
      <button
        type="submit"
        className="w-[104px] h-[54px] font-bold text-[20px] text-[#1e1e1e] border border-[#1e1e1e] rounded-[10px] bg-white py-[10px] px-[18px] hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300"
      >
        Search
      </button>
    </form>
  );
};
