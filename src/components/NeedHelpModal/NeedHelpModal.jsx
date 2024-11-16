import { Icon } from "../Icon/Icon";

export const NeedHelpModal = ({ toggleModal }) => {
  return (
    <div className="help-modal relative">
      <Icon
        name="heart"
        size={65}
        className="absolute left-[8px] top-[5px] -rotate-45 fill-[#f4faff] lg:-left-[65px] lg:-top-[130px]"
        viewbox="36"
      />
      <h3 className="mb-[8px] pt-[340px] text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] lg:mb-[18px] lg:pt-0 lg:leading-[1.6]">
        Thank you sincerely!
      </h3>
      <p className="mb-[18px] w-[260px] text-[14px] font-normal leading-[1.4] text-[#1e1e1e] md:mb-[28px] md:text-[16px] lg:w-[515px] lg:text-[28px] lg:leading-[1.3]">
        Your words are like a nightingale&apos;s song They will fly to us faster than the wind! Wait
        for the answer as soon as possible.
      </p>
      <button
        type="button"
        className="h-[44px] w-full rounded-[10px] border border-[#1e1e1e] py-[10px] text-center text-[16px] font-bold leading-[1] text-[#1e1e1e] transition duration-300 hover:bg-[#ffd437] focus-visible:bg-[#ffd437] lg:h-[52px] lg:w-[160px] lg:py-[9px] lg:text-[20px]"
        onClick={toggleModal}
      >
        Sounds good
      </button>
    </div>
  );
};
