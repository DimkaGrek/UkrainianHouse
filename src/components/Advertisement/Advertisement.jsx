import { Modal, NewsDetails, ReadMoreButton } from "../../components";

import { useModal, useNews } from "../../hooks";

export const Advertisement = () => {
  const { announceNews } = useNews();
  const [isOpenModal, toggleModal] = useModal();

  return announceNews.length ? (
    <>
      <div className="mb-[34px] flex flex-col-reverse gap-[16px] rounded-[18px] bg-[#ffd4377b] p-[18px] shadow-sm md:flex-row md:justify-between md:p-[24px] lg:mb-[44px] lg:px-[40px] lg:py-[57px]">
        <div className="flex min-h-full flex-col md:min-w-[50%] lg:max-w-[748px]">
          <h3 className="font-proza-semibold md:font-proza-medium lg:font-proza-semibold mb-[4px] text-[20px] font-semibold leading-[160%] text-[#1e1e1e] md:mb-[8px] md:text-[26px] md:font-medium md:leading-[131%] lg:mb-[20px] lg:text-[36px] lg:font-semibold lg:leading-[111%]">
            Coming soon...
          </h3>
          <pre className="mb-[16px] line-clamp-3 whitespace-pre-wrap font-istok text-[16px] leading-[137%] text-[#666] md:line-clamp-4 md:text-[18px] md:leading-[133%] lg:line-clamp-6 lg:text-[22px] lg:leading-[129%]">
            {announceNews[0].content}
          </pre>

          <div className="mt-auto">
            <ReadMoreButton toggleModal={toggleModal} />
          </div>
        </div>

        <img
          className="max-h-[450px] shrink-0 rounded-[10px] object-cover md:w-[300px] md:max-w-none md:rounded-[18px] lg:w-[450px] lg:max-w-[500px]"
          src={announceNews[0].photoUrls[0]?.photoUrls}
          alt={`${announceNews[0].photoUrls[0]?.caption || "Announce photo"}`}
          width="308"
          height="250"
        />
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          isOpen={isOpenModal}
          className="bg-white py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px]"
        >
          <NewsDetails {...announceNews[0]} />
        </Modal>
      )}
    </>
  ) : null;
};
