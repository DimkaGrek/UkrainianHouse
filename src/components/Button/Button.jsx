export const Button = ({ children, type, onClick }) => {
  return (
    <button
      type={type}
      className="font-istok flex content-center items-center gap-[6px] py-[9px] px-[18px] border border-solid border-[#1C1C1C] rounded-[10px] hover:bg-[#FFD437]"
      onClick={onClick || undefined}
    >
      {children}
    </button>
  );
};
