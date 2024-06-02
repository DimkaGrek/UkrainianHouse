import { Modal, NewsDetails } from '../../components';

import { useModal } from '../../hooks';

export const NewsListItem = ({ item }) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <li
        className="group p-[18px] bg-blue-100 shadow-md rounded-[18px] w-[100%] md:w-[342px] lg:w-[397px] lg:p-[24px] cursor-pointer active:bg-[#2355cc] hover:bg-[#2355cc] focus:bg-[#2355cc] transition duration-300"
        onClick={toggleModal}
      >
        <div className="overflow-hidden rounded-[18px] mb-[14px] lg:mb-[18px]">
          <img
            className="w-[306px] h-[209px] rounded-[18px] lg:w-[469px] lg:h-[249px] group-hover:scale-[1.05] group-focus:scale-[1.05] group-active::scale-[1.05] transition duration-300"
            src={item.photoUrls[0].photoUrls}
            alt="News"
            width={306}
            height={209}
          />
        </div>
        <div className="mb-[16px]">
          <h3 className="font-proza-medium font-medium text-[20px] text-[#1a1a1a] leading-[120%] mb-[8px] lg:text-[26px] lg:leading-[131%] group-active:text-[#fbfbfb] group-hover:text-[#fbfbfb] group-focus:text-[#fbfbfb] transition duration-300">
            {item.title}
          </h3>
          <p className="font-istok text-[14px] text-[#393939] leading-[129%] lg:text-[16px] lg:leading-[137%] line-clamp-5 lg:line-clamp-3 group-active:text-[#e4e4e4] group-hover:text-[#e4e4e4] group-focus:text-[#e4e4e4] transition duration-300">
            {item.content}
          </p>
        </div>
        <div className="flex justify-between">
          <p className=" font-istok text-[12px] text-[#a6a6a6] leading-[150%] group-active:text-[##dbdbdb] group-hover:text-[##dbdbdb] group-focus:text-[##dbdbdb] transition duration-300">
            {item.publishDate}
          </p>
          <p className="font-istok text-[12px] text-[#a6a6a6] leading-[150%] group-active:text-[##dbdbdb] group-hover:text-[##dbdbdb] group-focus:text-[##dbdbdb] transition duration-300">
            Maastricht
          </p>
        </div>
      </li>
      {isOpenModal && (
        <Modal toggleModal={toggleModal} className="news-modal" bg="white">
          {' '}
          <NewsDetails {...item} />
        </Modal>
      )}
    </>
  );
};
