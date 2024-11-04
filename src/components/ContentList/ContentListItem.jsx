import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';

import {
  BookForm,
  ConfirmDelete,
  MessageContent,
  Modal,
  NewsForm,
} from '../../components';

import { useModal } from '../../hooks';
import { bookStatusesColors, newsStatusesColors } from '../../constants';
import { getFormattedDate } from '../../helpers';
import { format } from 'date-fns';

export const ContentListItem = ({ item }) => {
  const [isOpen, toggleModal] = useModal();
  const [isOpenConfirmDelete, toggleConfirmDelete] = useModal();
  const isNews = Object.hasOwn(item, 'btnLink');
  const isBook = Object.hasOwn(item, 'coverImageUrl');
  const isMessage = Object.hasOwn(item, 'message');
  const isNewMessage = Object.hasOwn(item, 'message') && !item.read;

  const handleDelete = e => {
    e.stopPropagation();
    toggleConfirmDelete();
  };

  const itemContent = () => {
    if (isNews) {
      const bgStatus = newsStatusesColors[item.status];
      return (
        <>
          <div className="min-w-[250px] w-[25vw]">
            <h2
              title={item.title}
              className="font-medium text-[26px] leading-[131%] text-my-black2 mb-[6px] truncate"
            >
              {item.title}
            </h2>
            <p className=" text-my-black3 leading-[137%] truncate">
              {item.content}
            </p>
          </div>
          <span className="text-[#666]">
            {getFormattedDate(item.publishDate, '.')}
          </span>
          <span className="font-bold leading-[143%]">Maastricht</span>
          <span
            className={`inline-block h-[32px] w-[120px] py-1 px-3 bg-[${bgStatus}] rounded-[35px] text-white text-center`}
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
          <div className="flex justify-center items-center gap-3">
            <img
              src={item.coverImageUrl}
              className="w-[47px] h-[74px] rounded"
            />
            <div className="leading-6 text-xl min-w-[180px] w-[25vw]">
              <p className="text-my-black1 leading-6 font-medium">
                {item.author}
              </p>
              <p
                title={item.title}
                className=" text-my-black1 leading-6 truncate font-semibold"
              >
                {item.title}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4 text-sm leading-5 w-[240px]">
            <p className="text-[#666666]">{item.genre}</p>
            <p>{item.pageCount} pages</p>
            <p>{item.publicationYear}</p>
          </div>
          <span
            className={`inline-block h-[32px] w-[162px] py-1 px-3 bg-[${bgStatus}] rounded-[35px] text-white text-center`}
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
          <h3 className="w-[300px] text-[22px] leading-[26px] font-medium truncate color-my-black2">
            {item.name}
          </h3>
          <p className="w-[400px] leading-[22px] color-my-black3 truncate">
            {item.message}
          </p>
          <p className="color-my-black2">
            {format(item.createdAt, 'HH:mm / dd MMM yyyy')}
          </p>
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
        className={`h-[100px] flex justify-between items-center px-2 py-2.5 hover:bg-my-lightblue border-b border-[#C4C4C4] last:border-none ${
          isNewMessage && 'bg-slate-200 '
        } ${isMessage && 'cursor-pointer'}`}
        onClick={isMessage ? toggleModal : undefined}
      >
        {itemContent()}
        <div className="flex gap-4">
          {!isMessage && (
            <button type="button" onClick={toggleModal}>
              <FiEdit2 size={24} />
            </button>
          )}
          <button
            type="button"
            onClick={handleDelete}
            className="hover:text-green"
          >
            <MdOutlineDeleteForever size={24} color="red" />
          </button>
        </div>
      </li>
      {isOpen && (
        <Modal toggleModal={toggleModal}>{renderModalContent()}</Modal>
      )}
      {isOpenConfirmDelete && (
        <ConfirmDelete toggleModal={toggleConfirmDelete} item={item} />
      )}
    </>
  );
};
