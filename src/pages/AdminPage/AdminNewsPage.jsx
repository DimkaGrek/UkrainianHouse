import { useEffect } from 'react';
import { BookForm, Modal, NewsForm } from '../../components';
import { useModal } from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { fetchAllNews } from '../../my-redux';
import { logoutThunk } from '../../my-redux/Auth/operations';

const AdminNewsPage = () => {
  const [addNewsModal, toggleAddNewsModal] = useModal();
  const [addBookModal, toggleAddBookModal] = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  return (
    <div className="flex gap-4">
      <button
        className="primaryBtn"
        type="button"
        onClick={() => toggleAddNewsModal()}
      >
        Add News
      </button>
      <button
        className="primaryBtn"
        type="button"
        onClick={() => toggleAddBookModal()}
      >
        Add Book
      </button>
      <button
        className="primaryBtn"
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
      {addNewsModal && (
        <Modal toggleModal={toggleAddNewsModal}>
          <NewsForm toggle={toggleAddNewsModal} />
        </Modal>
      )}
      {addBookModal && (
        <Modal toggleModal={toggleAddBookModal}>
          <BookForm toggle={toggleAddBookModal} />
        </Modal>
      )}
    </div>
  );
};

export default AdminNewsPage;
