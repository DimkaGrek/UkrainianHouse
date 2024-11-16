import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";

import { BookForm, ConfirmDelete, MessageContent, Modal, NewsForm } from "../../components";

import { useModal } from "../../hooks";
import { bookStatusesColors, newsStatusesColors } from "../../constants";
import { getFormattedDate } from "../../helpers";
import { format } from "date-fns";

export const ContentListItem = ({ item }) => {
  const [isOpen, toggleModal] = useModal();
  const [isOpenConfirmDelete, toggleConfirmDelete] = useModal();
  const isNews = Object.hasOwn(item, "btnLink");
  const isBook = Object.hasOwn(item, "coverImageUrl");
  const isMessage = Object.hasOwn(item, "message");
  const isNewMessage = Object.hasOwn(item, "message") && !item.read;

  const handleDelete = (e) => {
    e.stopPropagation();
    toggleConfirmDelete();
  };

  const itemContent = () => {
    if (isNews) {
      const bgStatus = newsStatusesColors[item.status];
      return (
        <>
          <div className="w-[25vw] min-w-[250px]">
            <h2
              title={item.title}
              className="mb-[6px] truncate text-[26px] font-medium leading-[131%] text-my-black2"
            >
              {item.title}
            </h2>
            <p className="truncate leading-[137%] text-my-black3">{item.content}</p>
          </div>
          <span className="text-[#666]">{getFormattedDate(item.publishDate, ".")}</span>
          <span className="font-bold leading-[143%]">Maastricht</span>
          <span
            className={`inline-block h-[32px] w-[120px] px-3 py-1 bg-[${bgStatus}] rounded-[35px] text-center text-white`}
            style={{ backgroundColor: bgStatus }}
          >
            {item.status}
          </span>
        </>
      );
    }

    if (isBook) {
      const bgStatus = bookStatusesColors[item.status];
      return (
        <>
          <div className="flex items-center justify-center gap-3">
            <img src={item.coverImageUrl} className="h-[74px] w-[47px] rounded" />
            <div className="w-[25vw] min-w-[180px] text-xl leading-6">
              <p className="font-medium leading-6 text-my-black1">{item.author}</p>
              <p title={item.title} className="truncate font-semibold leading-6 text-my-black1">
                {item.title}
              </p>
            </div>
          </div>
          <div className="flex w-[240px] items-center justify-start gap-4 text-sm leading-5">
            <p className="text-[#666666]">{item.genre}</p>
            <p>{item.pageCount} pages</p>
            <p>{item.publicationYear}</p>
          </div>
          <span
            className={`inline-block h-[32px] w-[162px] px-3 py-1 bg-[${bgStatus}] rounded-[35px] text-center text-white`}
            style={{ backgroundColor: bgStatus }}
          >
            {item.status}
          </span>
        </>
      );
    }

    if (isMessage) {
      return (
        <>
          <h3 className="color-my-black2 w-[300px] truncate text-[22px] font-medium leading-[26px]">
            {item.name}
          </h3>
          <p className="color-my-black3 w-[400px] truncate leading-[22px]">{item.message}</p>
          <p className="color-my-black2">{format(item.createdAt, "HH:mm / dd MMM yyyy")}</p>
        </>
      );
    }
  };

  const renderModalContent = () => {
    if (isNews) {
      return <NewsForm item={item} toggle={toggleModal} />;
    }
    if (isBook) {
      return <BookForm item={item} toggle={toggleModal} />;
    }
    if (isMessage) {
      return <MessageContent item={item} toggle={toggleModal} />;
    }
  };

  return (
    <>
      <li
        className={`flex h-[100px] items-center justify-between border-b border-[#C4C4C4] px-2 py-2.5 last:border-none hover:bg-my-lightblue ${
          isNewMessage && "bg-slate-200"
        } ${isMessage && "cursor-pointer"}`}
        onClick={isMessage ? toggleModal : undefined}
      >
        {itemContent()}
        <div className="flex gap-4">
          {!isMessage && (
            <button type="button" onClick={toggleModal}>
              <FiEdit2 size={24} />
            </button>
          )}
          <button type="button" onClick={handleDelete} className="hover:text-green">
            <MdOutlineDeleteForever size={24} color="red" />
          </button>
        </div>
      </li>
      {isOpen && <Modal toggleModal={toggleModal}>{renderModalContent()}</Modal>}
      {isOpenConfirmDelete && <ConfirmDelete toggleModal={toggleConfirmDelete} item={item} />}
    </>
  );
};
