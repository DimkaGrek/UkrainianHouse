import { ReadMoreButton } from '../../components';

export const NewsDetails = ({
  title,
  content,
  publishDate,
  photoUrls,
  btnLink,
  btnText,
}) => {
  return (
    <div className=" h-[70vh] pr-[10px] md:pr-[15px] flex flex-col gap-[24px] lg:flex-row scrollbar">
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
                className="w-auto max-w-full md:max-w-[189px] lg:max-w-[400px] h-auto rounded-[18px]"
                alt={item.caption}
              />
            </li>
          ))}
        </ul>
      )}

      <ReadMoreButton className="lg:hidden" caption={btnText} link={btnLink} />
    </div>
  );
};
