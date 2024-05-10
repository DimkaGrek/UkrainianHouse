import img from '../../assets/images/news_img.jpg';

export const NewsListItem = item => {
  console.log(item);
  return (
    <li className="p-[18px] bg-blue-100 rounded-[18px] md:w-[342px] lg:w-[516px] lg:p-[24px]">
      <img
        className="w-[306px] h-[209px] rounded-[18px] mb-[14px] lg:w-[469px] lg:h-[249px] lg:mb-[18px]"
        src={img}
        alt="News"
        width={306}
        height={209}
      />
      <div className=" mb-[16px]">
        <h3 className="font-proza-medium font-medium text-[20px] text-[#1a1a1a] leading-[120%] mb-[8px] lg:text-[26px] lg:leading-[131%]">
          {item.title}
        </h3>
        <p className="font-istok text-[14px] text-[#393939] leading-[129%] lg:text-[16px] lg:leading-[137%]">
          {item.description}
        </p>
      </div>
      <div className="flex justify-between">
        <p className=" font-istok text-[12px] text-[#a6a6a6] leading-[150%] ">
          {item.date}
        </p>
        <p className="font-istok text-[12px] text-[#a6a6a6] leading-[150%]">
          {item.author}
        </p>
      </div>
    </li>
  );
};
