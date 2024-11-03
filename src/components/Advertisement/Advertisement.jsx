import { Modal, NewsDetails, ReadMoreButton } from '../../components';

import { useModal, useNews } from '../../hooks';

export const Advertisement = () => {
  const { announceNews } = useNews();
  const [isOpenModal, toggleModal] = useModal();

  return announceNews?.length ? (
    <>
      <div className="flex flex-col-reverse gap-[16px] bg-[#fff5c6] p-[18px] rounded-[18px] mb-[34px] md:flex-row md:gap-[12px] md:p-[24px] md:bg-[#ffd437] md:bg-opacity-40 lg:gap-[40px] lg:bg-opacity-50 lg:py-[57px] lg:px-[40px] lg:mb-[44px] shadow-sm">
        <div className="lg:w-[748px] flex flex-col  min-h-full">
          <h3 className="font-proza-semibold text-[20px] font-semibold text-[#1e1e1e] mb-[4px] leading-[160%] md:font-proza-medium md:font-medium md:text-[26px] md:leading-[131%] md:mb-[8px] lg:font-proza-semibold lg:font-semibold lg:text-[36px] lg:leading-[111%] lg:mb-[20px] ">
            Coming soon...
          </h3>
          <p className="font-istok text-[16px] text-[#666] mb-[16px] leading-[137%] md:text-[18px] md:leading-[133%] lg:text-[22px] lg:leading-[129%] line-clamp-3 md:line-clamp-4 lg:line-clamp-6">
            {announceNews[0]?.content}
          </p>

          <div className="mt-auto">
            <ReadMoreButton toggleModal={toggleModal} />
          </div>
        </div>

        <img
          className="md:max-w-none md:w-[300px] lg:w-[600px] max-h-[400px] rounded-[10px] md:rounded-[18px]"
          src={announceNews[0]?.photoUrls[0]?.photoUrls}
          alt="People"
          width="308"
          height="250"
        />
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px] bg-white"
        >
          {' '}
          <NewsDetails {...announceNews[0]} />
        </Modal>
      )}
    </>
  ) : null;
};
