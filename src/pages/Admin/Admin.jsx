import { Modal } from '../../components/Modal/Modal';
import { NewsForm } from '../../components/NewsForm/NewsForm';
import { useModal } from '../../hooks/useModal';

const Admin = () => {
  const [isModal, toggleIsModal] = useModal();

  return (
    <div>
      <button
        className="primaryBtn"
        type="button"
        onClick={() => toggleIsModal()}
      >
        Add News
      </button>
      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <NewsForm />
        </Modal>
      )}
    </div>
  );
};

export default Admin;
