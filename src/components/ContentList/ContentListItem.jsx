import { useDispatch } from 'react-redux';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Modal, NewsForm } from '../../components';

import { archiveOneNews } from '../../my-redux';
import { useModal } from '../../hooks';
import { newsStatusesColors } from '../../constants';
import { getFormattedDate } from '../../helpers';

export const ContentListItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, toggleModal] = useModal();

  const handleDelete = () => {
    dispatch(archiveOneNews(item.id))
      .unwrap()
      .then(() => toast.success('News deleted successfully'))
      .catch(e => toast.error(e.message));
  };

  const itemContent = () => {
    if (Object.hasOwn(item, 'btnLink')) {
      const bgStatus = newsStatusesColors[item.status];
      return (
        <>
          <div className="w-[520px]">
            <h2 className=" font-medium text-[26px] leading-[131%] text-my-black2 mb-[6px]">
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
  };

  const renderModalContent = () => {
    if (Object.hasOwn(item, 'btnLink')) {
      return <NewsForm item={item} toggleModal={toggleModal} />;
    }
  };

  return (
    <>
      <li className="flex justify-between items-center">
        {itemContent()}

        <div className="flex gap-6">
          <button type="button" onClick={toggleModal}>
            <FiEdit2 size={24} />
          </button>
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
    </>
  );
};
