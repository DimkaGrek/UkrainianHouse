import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Modal } from '../../components';

import { deleteBook, deleteMessage, deleteOneNews } from '../../my-redux';

export const ConfirmDelete = ({ item, toggleModal }) => {
  const isNews = Object.hasOwn(item, 'btnLink');
  const isBook = Object.hasOwn(item, 'coverImageUrl');
  const isMessage = Object.hasOwn(item, 'message');
  const dispatch = useDispatch();

  const truncatedItemName = item?.title
    ? item.title.length > 10
      ? `${item.title.slice(0, 20)}...`
      : item.title
    : 'item';

  const handleDeleteAction = (deleteAction, itemName) => {
    dispatch(deleteAction)
      .unwrap()
      .then(() => {
        toast.success(`The «${itemName}» was successfully deleted.`);
        toggleModal();
      })
      .catch(error => {
        const errorMessage = error.message || 'Unknown error';
        toast.error(`${itemName} was not deleted. ${errorMessage}`);
      });
  };

  const handleDelete = () => {
    if (isNews) {
      handleDeleteAction(deleteOneNews(item.id), truncatedItemName);
    }

    if (isBook) {
      handleDeleteAction(deleteBook(item.id), truncatedItemName);
    }

    if (isMessage) {
      handleDeleteAction(deleteMessage(item.id), 'message');
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <p className="h-[100px] text-[24px] mb-3 font-medium flex items-center">
        {`Are you sure you want to delete «${
          isMessage ? 'This message' : truncatedItemName
        }»?`}
      </p>
      <div className="flex gap-5">
        <button
          type="button"
          className="primaryBtn w-1/2"
          onClick={toggleModal}
        >
          Cancel
        </button>
        <button
          type="button"
          className="primaryBtn w-1/2"
          onClick={handleDelete}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};
