import peopleImg from '../../assets/images/people.jpg';

export const Advertisement = () => {
  return (
    <div className="flex flex-col-reverse gap-[16px]  bg-[#fff5c6] p-[18px] rounded-[18px] mb-[34px] md:flex-row md:gap-[12px] md:p-[24px] md:bg-[#ffd437] md:bg-opacity-40 lg:gap-[87px] lg:bg-[#fff6d5]  lg:bg-opacity-50 lg:py-[57px] lg:px-[40px] lg:mb-[44px] ">
      <div className="lg:w-[748px]">
        <h3 className="font-proza-semibold text-[20px] font-semibold text-[#1e1e1e] mb-[4px] leading-[160%] md:font-proza-medium md:font-medium md:text-[26px] md:leading-[131%] md:mb-[8px] lg:font-proza-semibold lg:font-semibold lg:text-[36px] lg:leading-[111%] lg:mb-[28px] ">
          Coming soon...
        </h3>
        <p className="font-istok text-[16px] text-[#666] mb-[16px] leading-[137%]  md:text-[18px] md:leading-[133%] md:mb-[8px] lg:text-[28px] lg:leading-[129%] lg:mb-[28px]">
          Grateful for the memories created! An enchanting event unfolds at the
          Carnival, where the air is filled with the lively melodies of
          traditional Carnival songs and the joyous laughter of children...
        </p>
        <button
          type="button"
          className="mx-auto w-[100%] h-[44px] py-[10px] px-[18px] bg-transparent border border-[#1e1e1e] rounded-[10px] font-istok  font-bold text-[16px] text-[#1e1e1e] leading-[150%] text-center lg:h-[52px] lg:py-[9px] lg:leading-[170%]"
        >
          Read More
        </button>
      </div>
      <img
        className="rounded-[10px] w-[308px] h-[250px] md:w-[263px] md:h-[214px] lg:w-[681px] lg:h-[306px] "
        src={peopleImg}
        alt="People"
      />
    </div>
  );
};
