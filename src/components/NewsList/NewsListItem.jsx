import { Modal, NewsDetails } from "../../components";

import { getFormattedDate } from "../../helpers";
import { useModal } from "../../hooks";

export const NewsListItem = ({ item, className = "" }) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <li
        className={`${className} group flex w-[100%] cursor-pointer flex-col rounded-[18px] bg-my-lightblue p-[18px] shadow-md transition duration-300 hover:bg-my-blue focus-visible:bg-my-blue active:bg-my-blue md:w-[342px] lg:w-[397px] lg:p-[24px]`}
        onClick={toggleModal}
      >
        <div className="mb-[14px] overflow-hidden rounded-[18px] transition duration-300 group-hover:text-[#fbfbfb] group-focus-visible:text-[#fbfbfb] group-active:text-[#fbfbfb] lg:mb-[18px]">
          <img
            className="h-[209px] w-[306px] rounded-[18px] object-cover transition duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05] group-active:scale-[1.05] lg:h-[249px] lg:w-[469px]"
            src={item.photoUrls[0]?.photoUrls || ""}
            alt={item.photoUrls[0]?.caption || item.title}
            width={306}
            height={209}
          />
        </div>
        <div className="mb-[16px]">
          <h3 className="font-proza-medium mb-[8px] text-[20px] font-medium leading-[120%] text-[#1a1a1a] group-hover:text-[#fbfbfb] group-focus-visible:text-[#fbfbfb] group-active:text-[#fbfbfb] lg:text-[26px] lg:leading-[131%]">
            {item.title}
          </h3>
          <p className="line-clamp-5 font-istok text-[14px] leading-[129%] text-[#393939] group-hover:text-[#e4e4e4] group-focus-visible:text-[#e4e4e4] group-active:text-[#e4e4e4] lg:line-clamp-3 lg:text-[16px] lg:leading-[137%]">
            {item.content}
          </p>
        </div>
        <div className="mt-auto flex justify-between font-istok text-[12px] leading-[150%] text-[#a6a6a6] group-hover:text-[##dbdbdb] group-focus-visible:text-[##dbdbdb] group-active:text-[##dbdbdb]">
          <p>{getFormattedDate(item.publishDate)}</p>
          <p>Maastricht</p>
        </div>
      </li>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="bg-white py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px]"
        >
          {" "}
          <NewsDetails {...item} />
        </Modal>
      )}
    </>
  );
};
