export const ReadMoreButton = ({
  toggleModal,
  className = '',
  caption,
  link,
}) => {
  const handleClick = () => {
    if (!toggleModal && link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      toggleModal();
    }
  };

  return (
    (link || toggleModal) && (
      <button
        type="button"
        className={`${className} mx-auto w-[100%] h-[44px] md:h-[54px] py-[10px] px-[18px] bg-transparent border border-[#1e1e1e] rounded-[10px] font-istok font-bold text-[16px] md:text-[20px] text-[#1e1e1e] leading-[150%] md:leading-[170%] text-center lg:py-[9px] lg:leading-[170%] hover:bg-[#ffd437] focus-visible:bg-[#ffd437] transition duration-300 md:order-1 lg:order-none`}
        onClick={handleClick}
      >
        {caption || 'Read more'}
      </button>
    )
  );
};
