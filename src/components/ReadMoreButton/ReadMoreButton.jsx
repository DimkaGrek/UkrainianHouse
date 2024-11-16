export const ReadMoreButton = ({ toggleModal, className = "", caption, link }) => {
  const handleClick = () => {
    if (!toggleModal && link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      toggleModal();
    }
  };

  return (
    (link || toggleModal) && (
      <button
        type="button"
        className={`${className} mx-auto h-[44px] w-[100%] rounded-[10px] border border-[#1e1e1e] bg-transparent px-[18px] py-[10px] text-center font-istok text-[16px] font-bold leading-[150%] text-[#1e1e1e] transition duration-300 hover:bg-[#ffd437] focus-visible:bg-[#ffd437] md:order-1 md:h-[54px] md:text-[20px] md:leading-[170%] lg:order-none lg:py-[9px] lg:leading-[170%]`}
        onClick={handleClick}
      >
        {caption || "Read more"}
      </button>
    )
  );
};
