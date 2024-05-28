import { Modal, ReadMoreButton } from '../../components';

import { useModal } from '../../hooks';

export const NewsListItem = ({
  title,
  content,
  publishDate,
  photoUrls,
  btnText,
  btnLink,
}) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <li
        className="group p-[18px] bg-blue-100 shadow-md rounded-[18px] w-[100%] md:w-[342px] lg:w-[397px] lg:p-[24px] cursor-pointer active:bg-[#2355cc] hover:bg-[#2355cc] focus:bg-[#2355cc] transition duration-300"
        onClick={toggleModal}
      >
        <div className="overflow-hidden rounded-[18px] mb-[14px] lg:mb-[18px]">
          <img
            className="w-[306px] h-[209px] rounded-[18px] lg:w-[469px] lg:h-[249px] group-hover:scale-[1.05] transition duration-300"
            src={photoUrls[0].photoUrls}
            alt="News"
            width={306}
            height={209}
          />
        </div>
        <div className="mb-[16px]">
          <h3 className="font-proza-medium font-medium text-[20px] text-[#1a1a1a] leading-[120%] mb-[8px] lg:text-[26px] lg:leading-[131%] group-active:text-[#fbfbfb] group-hover:text-[#fbfbfb] group-focus:text-[#fbfbfb] transition duration-300">
            {title}
          </h3>
          <p className="font-istok text-[14px] text-[#393939] leading-[129%] lg:text-[16px] lg:leading-[137%] line-clamp-5 lg:line-clamp-3 group-active:text-[#e4e4e4] group-hover:text-[#e4e4e4] group-focus:text-[#e4e4e4] transition duration-300">
            {content}
          </p>
        </div>
        <div className="flex justify-between">
          <p className=" font-istok text-[12px] text-[#a6a6a6] leading-[150%] group-active:text-[##dbdbdb] group-hover:text-[##dbdbdb] group-focus:text-[##dbdbdb] transition duration-300">
            {publishDate}
          </p>
          <p className="font-istok text-[12px] text-[#a6a6a6] leading-[150%] group-active:text-[##dbdbdb] group-hover:text-[##dbdbdb] group-focus:text-[##dbdbdb] transition duration-300">
            Maastricht
          </p>
        </div>
      </li>
      {isOpenModal && (
        <Modal toggleModal={toggleModal} className="news-modal">
          <div className=" h-[75vh] pr-[10px] md:pr-[15px] flex flex-col gap-[24px] lg:flex-row scrollbar">
            <div className="md:order-1 lg:order-1">
              <h3 className="font-proza-medium font-semibold text-[20px] text-[#1a1a1a] leading-[120%] md:leading-[160%] mb-[10px] md:mb-[24px] lg:text-[60px] lg:leading-[131%]">
                {title}
              </h3>
              <p className="font-istok text-[16px] text-[#393939] leading-[137%] lg:text-[20px] lg:leading-[140%] mb-[24px]">
                {content}
              </p>
              <p className=" font-istok text-[12px] md:text-[14px] lg:text-[20px] text-[#a6a6a6] text-left leading-[150%] md:leading-[129%] lg:leading-[150%] lg:mb-[24px]">
                {publishDate}
              </p>
              <ReadMoreButton
                className="hidden lg:block"
                caption={btnText}
                link={btnLink}
              />
            </div>

            {photoUrls?.length && (
              <ul className="flex flex-col items-center md:flex-row lg:flex-col gap-[12px] md:gap-[24px] md:order-2 lg:order-2 ">
                {photoUrls.map((item, index) => (
                  <li key={index} className="w-auto md:w-auto lg:w-auto">
                    <img
                      src={`${item.photoUrls}`}
                      width={316}
                      height={108}
                      className="w-auto max-w-full md:max-w-[189px] lg:max-w-[400px] h-auto rounded-[10px]"
                      alt={item.caption}
                    />
                  </li>
                ))}
              </ul>
            )}

            <ReadMoreButton
              className="lg:hidden"
              caption={btnText}
              link={btnLink}
            />
          </div>
        </Modal>
      )}
    </>
  );
};
