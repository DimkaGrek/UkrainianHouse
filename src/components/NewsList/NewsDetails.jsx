import { ReadMoreButton } from "../../components";

import { getFormattedDate } from "../../helpers";

export const NewsDetails = ({ title, content, publishDate, photoUrls, btnLink, btnText }) => {
  const isReadMoreAvailable = btnText && btnLink;
  return (
    <div className="scrollbar flex max-h-[70vh] flex-col gap-[24px] pb-2 pr-[10px] md:pb-0 md:pr-[15px] lg:flex-row lg:gap-5 lg:pr-0">
      <div className="md:order-1 lg:flex lg:min-h-full lg:flex-col">
        <div
          className={`max-w-[736px] ${
            isReadMoreAvailable ? "lg:max-h-[520px]" : "lg:max-h-[574px]"
          } scrollbar-desktop mb-[24px] lg:pr-2`}
        >
          <h3 className="font-proza-medium mb-[10px] break-words text-[20px] font-semibold leading-[120%] text-[#1a1a1a] md:mb-[24px] md:leading-[160%] lg:text-[60px] lg:leading-[131%]">
            {title}
          </h3>
          <p className="break-words font-istok text-[16px] leading-[137%] text-[#393939] lg:text-[20px] lg:leading-[140%]">
            {content}
          </p>
        </div>
        <p
          className={`text-left font-istok text-[12px] leading-[150%] text-[#a6a6a6] md:text-[14px] md:leading-[129%] lg:text-[20px] lg:leading-[150%] ${
            isReadMoreAvailable ? "lg:mb-[24px]" : "lg:mb-0"
          }`}
        >
          {getFormattedDate(publishDate)}
        </p>
        <ReadMoreButton className="mt-auto hidden lg:block" caption={btnText} link={btnLink} />
      </div>

      {photoUrls?.length ? (
        <ul className="scrollbar-desktop flex flex-col items-center gap-3 md:order-2 md:flex-row lg:max-h-[628px] lg:flex-col lg:gap-6 lg:pr-2">
          {photoUrls.map((item, index) => (
            <li key={index} className="w-auto">
              <img
                src={item.photoUrls}
                width={316}
                height={108}
                className="w-auto rounded-[18px] object-cover tablet:h-[150px] tablet:w-[198px] lg:w-[400px]"
                alt={item.caption || "News photo"}
              />
            </li>
          ))}
        </ul>
      ) : null}

      <ReadMoreButton className="lg:hidden" caption={btnText} link={btnLink} />
    </div>
  );
};
