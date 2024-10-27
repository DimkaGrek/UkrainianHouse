import { Modal, NewsDetails, ReadMoreButton } from '../../components';

import { getImages } from '../../helpers';
import { useModal, useNews } from '../../hooks';

export const Advertisement = () => {
  const { announceNews } = useNews();
  const [isOpenModal, toggleModal] = useModal();

  const {
    people_mob1x,
    people_mob2x,
    people_tab1x,
    people_tab2x,
    people_desk1x,
    people_desk2x,
  } = getImages();

  return announceNews?.length ? (
    <>
      <div className="flex flex-col-reverse items-center gap-[16px]  bg-[#fff5c6] p-[18px] rounded-[18px] mb-[34px] md:flex-row md:gap-[12px] md:p-[24px] md:bg-[#ffd437] md:bg-opacity-40 lg:gap-[40px] lg:bg-opacity-50 lg:py-[57px] lg:px-[40px] lg:mb-[44px] shadow-sm">
        <div className="lg:w-[748px]">
          <h3 className="font-proza-semibold text-[20px] font-semibold text-[#1e1e1e] mb-[4px] leading-[160%] md:font-proza-medium md:font-medium md:text-[26px] md:leading-[131%] md:mb-[8px] lg:font-proza-semibold lg:font-semibold lg:text-[36px] lg:leading-[111%] lg:mb-[20px] ">
            Coming soon...
          </h3>
          <p className="font-istok text-[16px] text-[#666] mb-[16px] leading-[137%]  md:text-[18px] md:leading-[133%] md:mb-[8px] lg:text-[22px] lg:leading-[129%] lg:mb-[20px]">
            Grateful for the memories created! An enchanting event unfolds at
            the Carnival, where the air is filled with the lively melodies of
            traditional Carnival songs and the joyous laughter of children...
          </p>
          <ReadMoreButton toggleModal={toggleModal} />
        </div>

        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${people_desk1x} 1x, ${people_desk2x} 2x`}
            width="520"
            height="232"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${people_tab1x} 1x, ${people_tab2x} 2x`}
            width="263"
            height="214"
          />

          <img
            className="md:max-w-none rounded-[10px] md:rounded-[18px]"
            srcSet={`${people_mob1x} 1x, ${people_mob2x} 2x`}
            src={people_desk1x}
            alt="People"
            width="308"
            height="250"
          />
        </picture>
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="py-[58px] pl-[20px] pr-[10px]  md:py-[58px] md:pl-[40px] md:pr-[25px] bg-white"
        >
          {' '}
          <NewsDetails {...announceNews[0]} />
        </Modal>
      )}
    </>
  ) : null;
};
