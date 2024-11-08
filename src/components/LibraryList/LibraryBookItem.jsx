import { useModal } from '../../hooks';
import { Modal } from '../../components';
import { DetailsBook } from './DetailsBook';

export const LibraryBookItem = ({
  item: { coverImageUrl, author, title, publicationYear, pageCount, genre },
}) => {
  const [isOpenModal, toggleModal] = useModal();

  console.log(coverImageUrl);
  return (
    // outline outline-[1px] outline-red-500
    <>
      <div
        onClick={toggleModal}
        className=" shadow-lg p-0 lg:p-4 rounded-[18px] group w-full lg:w-[260px] transition duration-300  
  border border-transparent 
    active:bg-my-lightblue hover:bg-my-lightblue focus-visible:bg-my-lightblue cursor-pointer  "
      >
        <div className="mb-[16px] lg:mb-[6px] overflow-hidden rounded-[18px] group-active:text-[#fbfbfb] group-hover:text-[#fbfbfb] group-focus-visible:text-[#fbfbfb] transition duration-300">
          <img
            className="rounded-[18px] w-[163px] h-[260px] lg:w-[238px] lg:h-[380px]  group-hover:scale-[1.05] group-focus:scale-[1.05] group-active:scale-[1.05] transition duration-300"
            src={coverImageUrl}
            alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
          />
        </div>

        <h4
          className="line-clamp-1 mb-[4px]  text-[18px] leading-[1] text-[#1e1e1e] font-istok text-center
                lg:font-['Istok_Web'] lg:text-[28px] lg:leading-[1.28571]  transition duration-300"
        >
          {author}
        </h4>
        <ul className="pt-0 pl-2 pr-2 pb-2 ">
          <li>
            <p
              className="line-clamp-1 mb-[4px]  font-['Proza_Libre'] font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[4px]
             lg:font-sans lg:font-semibold lg:leading-[1.6]    "
            >
              {title}
            </p>
          </li>
          <li>
            <p
              className="line-clamp-1 font-['Istok_Web']  text-[12px] leading-[1.5] text-center text-[#666]
             lg:font-sans lg:italic lg:text-[20px] lg:leading-normal lg:text-start  "
            >
              {genre}
            </p>
          </li>
          <li>
            <p
              className="font-['Istok_Web']  text-[14px] leading-[1.28571] text-[#666666] flex justify-between items-center 
            
            
            lg:font-sans lg:italic  lg:text-[20px] lg:leading-normal lg:text-[#1e1e1e]"
            >
              {pageCount} pages
              <span className="text-[16px] leading-[1.375] text-right ">
                {publicationYear}
              </span>
            </p>
          </li>
        </ul>
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px] bg-white"
        >
          {' '}
          <DetailsBook
            {...{
              coverImageUrl,
              author,
              title,
              publicationYear,
              pageCount,
              genre,
            }}
          />
        </Modal>
      )}
    </>
  );
};

// <div
//   onClick={toggleModal}
//   className=" w-full    lg:w-[238px]    transition-all duration-300 ease-in-out
// border border-transparent rounded-b-[18px]
//   hover:border-[#666] hover:bg-[#b0e0ff] cursor-pointer
//   focus:border-[#666] focus:bg-[#b0e0ff] cursor-pointer "
// >
//   {/* <img src="https://kniga.biz.ua/images/goods/big/38527.jpg" alt="" /> */}

//   <img
//     className="mb-[16px] w-[163px] h-[260px]    lg:w-[238px]  lg:h-[380px] lg:mb-[6px] "
//     //
//     //163 260
//     // src="https://biblioteka.cdu.edu.ua/images/prosvrobota/kotsubinskii/image024.jpg"
//     // src={imgURL + '/' + item.coverImageUrl}
//     // src={'http://dev.ukrhouse.pp.ua:8080' + '/' + coverImageUrl}
//     src={coverImageUrl}
//     alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
//   />
//   <h4
//     className="line-clamp-1 mb-[4px]  text-[18px] leading-[1] text-[#1e1e1e] font-istok text-center
//               lg:font-['Istok_Web'] lg:text-[28px] lg:leading-[1.28571]"
//   >
//     {author}
//   </h4>
//   <ul className="pt-0 pl-2 pr-2 pb-2 ">
//     <li>
//       <p
//         className="line-clamp-1 mb-[4px]  font-['Proza_Libre'] font-semibold text-[20px] leading-[1.2] text-center text-[#1e1e1e] mb-[4px]
//            lg:font-sans lg:font-semibold lg:leading-[1.6]    "
//       >
//         {title}
//       </p>
//     </li>
//     <li>
//       <p
//         className="line-clamp-1 font-['Istok_Web']  text-[12px] leading-[1.5] text-center text-[#666]
//            lg:font-sans lg:italic lg:text-[20px] lg:leading-normal lg:text-start  "
//       >
//         {genre}
//       </p>
//     </li>
//     <li>
//       <p
//         className="font-['Istok_Web']  text-[14px] leading-[1.28571] text-[#666666] flex justify-between items-center

//           lg:font-sans lg:italic  lg:text-[20px] lg:leading-normal lg:text-[#1e1e1e]"
//       >
//         {pageCount} pages
//         <span className="text-[16px] leading-[1.375] text-right ">
//           {publicationYear}
//         </span>
//       </p>
//     </li>
//   </ul>
// </div>;
