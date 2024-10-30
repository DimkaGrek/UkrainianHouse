export const LibraryBookItem = ({
  item: { coverImageUrl, author, title, publicationYear, pageCount, genre },
}) => {
  console.log(coverImageUrl);
  // const imgURL = 'http://dev.ukrhouse.pp.ua:8080';
  return (
    // outline outline-[2px] outline-red-500
    <>
      <div
        className="w-[238px]    transition-all duration-300 ease-in-out
  border border-transparent rounded-b-[18px]
    hover:border-[#666] hover:bg-[#b0e0ff] cursor-pointer
    focus:border-[#666] focus:bg-[#b0e0ff] cursor-pointer "
      >
        {/* <img src="https://kniga.biz.ua/images/goods/big/38527.jpg" alt="" /> */}

        <img
          className="mb-[6px]"
          src="https://biblioteka.cdu.edu.ua/images/prosvrobota/kotsubinskii/image024.jpg"
          // src={imgURL + '/' + item.coverImageUrl}
          // src={'http://dev.ukrhouse.pp.ua:8080' + '/' + coverImageUrl}
          // src={coverImageUrl}
          alt="шось там таке як понаписуть..."
          width={238}
          height={380}
        />
        <h4 className="font-['Istok_Web'] font-normal text-[28px] leading-[1.28571] text-[#1e1e1e] text-center">
          {author}
        </h4>
        <ul className="pt-0 pl-1 pr-1 pb-1 ">
          <li>
            <p className="font-sans font-semibold text-[20px] leading-[1.6] text-center text-[#1e1e1e] h-[64px]   mb-[4px] ">
              {title}
            </p>
          </li>
          <li>
            <p className="font-sans italic font-normal text-[20px] leading-normal text-[#666666]">
              {genre}
            </p>
          </li>
          <li>
            <p className="font-sans italic font-normal text-[20px] leading-normal text-[#1e1e1e] flex justify-between items-center ">
              {pageCount} pages
              <span className="font-sans italic font-normal text-[20px] leading-normal text-right text-[#1e1e1e]  ">
                {publicationYear}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
