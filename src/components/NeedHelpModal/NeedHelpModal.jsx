import { Icon } from '../Icon/Icon';

export const NeedHelpModal = ({ toggleModal }) => {
  return (
    <div className="relative help-modal">
      <Icon
        name="heart"
        size={65}
        className="absolute top-[5px] left-[8px] lg:-top-[130px] lg:-left-[65px] fill-[#f4faff] -rotate-45"
        viewbox="36"
      />
      <h3 className="pt-[340px] lg:pt-0 text-[20px] text-[#1e1e1e] leading-[1.2] lg:leading-[1.6] font-semibold mb-[8px] lg:mb-[18px]">
        Thank you sincerely!
      </h3>
      <p className="w-[260px] lg:w-[515px] text-[14px] md:text-[16px] lg:text-[28px] text-[#1e1e1e] leading-[1.4] lg:leading-[1.3] font-normal mb-[18px] md:mb-[28px]">
        Your words are like a nightingale&apos;s song They will fly to us faster
        than the wind! Wait for the answer as soon as possible.
      </p>
      <button
        type="button"
        className="w-full lg:w-[160px] rounded-[10px] h-[44px] lg:h-[52px] border border-[#1e1e1e] py-[10px] lg:py-[9px] text-[16px] lg:text-[20px] text-[#1e1e1e] text-center leading-[1] font-bold hover:bg-[#ffd437] focus-visible:bg-[#ffd437] transition duration-300"
        onClick={toggleModal}
      >
        Sounds good
      </button>
    </div>
  );
};
