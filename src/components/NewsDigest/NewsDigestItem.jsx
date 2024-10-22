import { useModal } from '../../hooks';
import { Modal, NewsDetails } from 'components';

export const NewsDigestItem = ({ item }) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <div
        className="bg-my-lightblue h-[439px] rounded-[18px] p-[18px] border-[1px] border-[#666] md:w-[342px] md:h-[440px]  lg:w-[397px] lg:h-[491px] lg:p-[24px] cursor-pointer group hover:bg-[#2355cc] focus:bg-[#2355cc] hover:border-none focus:border-none transition duration-300"
        onClick={toggleModal}
      >
        <img
          src={item.photoUrls[0]?.photoUrls}
          alt="New's photo"
          className="rounded-[18px] border-[1px] border-[#666] mb-[14px] w-[100%] lg:mb-[18px]  lg:h-[249px]  group-hover:border-[#fff] group-focus:border-[#fff]  group-hover:scale-[1.05] group-focus:scale-[1.05] transition duration-300"
        />
        <h3 className="text-[20px] leading-[1.2] mb-[8px] font-proza font-medium text-[#1a1a1a] lg:text-[26px] lg:leading-[1.31] group-hover:text-[#fbfbfb] group-focus:text-[#fbfbfb] transition duration-300 ">
          {item.title}
        </h3>
        <p className="mb-[16px] font-istok  text-[14px] leading-[1.29]   line-clamp-5 text-[#393939] lg:text-[16px]  lg:leading-[1.37] lg:line-clamp-3 group-hover:text-[#e4e4e4] group-focus:text-[#e4e4e4] transition duration-300 ">
          {item.content}
        </p>
        <div className="font-istok flex justify-between text-[12px] leading-[1.5]  text-[#A6A6A6] group-hover:text-[#dbdbdb]] group-focus:text-[#dbdbdb] transition duration-300 ">
          <p>{item.publishDate}</p>
          <p>Maastricht</p>
        </div>
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="py-[58px] pl-[20px] pr-[10px]  md:py-[58px] md:pl-[40px] md:pr-[25px] bg-white"
        >
          <NewsDetails {...item} />
        </Modal>
      )}
    </>
  );
};
