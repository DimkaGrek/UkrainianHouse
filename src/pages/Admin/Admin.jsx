import { BookForm } from '../../components/BookForm/BookForm';
import { Modal } from '../../components/Modal/Modal';
import { NewsForm } from '../../components/NewsForm/NewsForm';
import { useModal } from '../../hooks/useModal';

const Admin = () => {
  const [addNewsModal, toggleAddNewsModal] = useModal();
  const [addBookModal, toggleAddBookModal] = useModal();

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
      {addNewsModal && (
        <Modal toggleModal={toggleAddNewsModal}>
          <NewsForm toggle={toggleAddNewsModal} />
        </Modal>
      )}
      {addBookModal && (
        <Modal toggleModal={toggleAddBookModal}>
          <BookForm />
        </Modal>
      )}
    </div>
  );
};

export default Admin;
