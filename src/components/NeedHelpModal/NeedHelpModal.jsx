export const NeedHelpModal = ({ toggleModal }) => {
  return (
    <div className="relative help-modal">
      <h3 className="pt-[387px] text-[20px] text-[#1e1e1e] leading-[1.2] font-semibold mb-[8px]">
        Щиро дякуємо!
      </h3>
      <p className="w-[260px] text-[16px] text-[#1e1e1e] leading-[1.4] font-normal mb-[18px]">
        Ваші слова неначе пісня солов&apos;їна – полетять до нас швидше за
        вітер! Чекайте відповіді якнайшвидше.
      </p>
      <button
        type="button"
        className="w-full rounded-[10px] h-[44px] border border-[#1e1e1e] py-[10px] text-[16px] text-[#1e1e1e] text-center leading-[1] font-bold"
        onClick={toggleModal}
      >
        Гаразд, чекаю!
      </button>
    </div>
  );
};
