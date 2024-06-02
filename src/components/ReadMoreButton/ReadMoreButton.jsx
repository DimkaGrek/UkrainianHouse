import { useNavigate } from 'react-router-dom';

export const ReadMoreButton = ({
  onClick,
  className = '',
  caption = 'Read more',
  btnLink = '/news',
}) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`${className} mx-auto w-[100%] h-[44px] md:h-[54px] py-[10px] px-[18px] bg-transparent border border-[#1e1e1e] rounded-[10px] font-istok  font-bold text-[16px] md:text-[20px] text-[#1e1e1e] leading-[150%] md:leading-[170%] text-center  lg:py-[9px] lg:leading-[170%] hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300 md:order-1 lg:order-1`}
      onClick={onClick ? onClick : () => navigate(btnLink)}
    >
      {caption}
    </button>
  );
};
