export const LibraryBookItem = () => {
  return (
    // outline outline-[2px] outline-red-500
    <div
      className="max-w-[300px]    transition-all duration-300 ease-in-out
border border-transparent rounded-b-[18px]
  hover:border-[#666] hover:bg-[#b0e0ff] cursor-pointer
  focus:border-[#666] focus:bg-[#b0e0ff] cursor-pointer "
    >
      {/* <img src="https://kniga.biz.ua/images/goods/big/38527.jpg" alt="" /> */}

      <img
        className="mb-[6px]"
        src="https://biblioteka.cdu.edu.ua/images/prosvrobota/kotsubinskii/image024.jpg"
        alt=""
        width={238}
        height={380}
      />
      <h4 className="font-['Istok_Web'] font-normal text-[28px] leading-[1.28571] text-[#1e1e1e] text-center">
        Тарас Шевченко
      </h4>
      <ul className="pt-0 pl-5 pr-5 pb-8 ">
        <li>
          <p className="font-sans font-semibold text-[20px] leading-[1.6] text-center text-[#1e1e1e] ">
            Кобзар
          </p>
        </li>
        <li>
          <p className="font-sans italic font-normal text-[20px] leading-normal text-[#666666]">
            поезія
          </p>
        </li>
        <li>
          <p className="font-sans italic font-normal text-[20px] leading-normal text-[#1e1e1e] flex justify-between items-center ">
            475 pages
            <span className="font-sans italic font-normal text-[20px] leading-normal text-right text-[#1e1e1e]  ">
              2018
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};
