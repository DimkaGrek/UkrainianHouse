import { Modal, DetailsBook } from "../../components";

import { useModal } from "../../hooks";

export const LibraryBookItem = ({
  item: { coverImageUrl, author, title, publicationYear, pageCount, genre, description },
}) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <div
        onClick={toggleModal}
        className="group w-full cursor-pointer rounded-[18px] border border-transparent p-1 shadow-lg transition duration-300 hover:bg-my-lightblue focus-visible:bg-my-lightblue active:bg-my-lightblue lg:w-[260px] lg:p-4"
      >
        <div className="mb-[16px] overflow-hidden rounded-[18px] transition duration-300 group-hover:text-[#fbfbfb] group-focus-visible:text-[#fbfbfb] group-active:text-[#fbfbfb] lg:mb-[6px]">
          <img
            className="h-[260px] w-[163px] rounded-[18px] transition duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05] group-active:scale-[1.05] lg:h-[380px] lg:w-[238px]"
            src={coverImageUrl}
            alt={`книга бібліотеки, автор: ${author}, назва твору: ${title} `}
          />
        </div>

        <h4 className="mb-[4px] line-clamp-1 text-center font-istok text-[18px] leading-[1] text-[#1e1e1e] transition duration-300 lg:text-[28px] lg:leading-[1.28571]">
          {author}
        </h4>
        <ul className="pb-2 pl-2 pr-2 pt-0">
          <li>
            <p className="mb-[4px] line-clamp-1 text-center font-proza text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] lg:font-semibold lg:leading-[1.6]">
              {title}
            </p>
          </li>
          <li>
            <p className="line-clamp-1 text-center font-istok text-[12px] leading-[1.5] text-[#666] lg:text-start lg:text-[20px] lg:italic lg:leading-normal">
              {genre}
            </p>
          </li>
          <li>
            <p className="flex items-center justify-between font-istok text-[14px] leading-[1.28571] text-[#666666] lg:text-[20px] lg:italic lg:leading-normal lg:text-[#1e1e1e]">
              {pageCount} pages
              <span className="text-right text-[16px] leading-[1.375]">{publicationYear}</span>
            </p>
          </li>
        </ul>
      </div>
      {isOpenModal && (
        <Modal
          toggleModal={toggleModal}
          className="bg-white py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px]"
        >
          {" "}
          <DetailsBook
            {...{
              coverImageUrl,
              author,
              title,
              publicationYear,
              pageCount,
              genre,
              description,
            }}
          />
        </Modal>
      )}
    </>
  );
};
