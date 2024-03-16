import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { NewsForm } from '../../components/NewsForm/NewsForm';
import { useModal } from '../../hooks/useModal';

const Admin = () => {
  const [isModal, toggleIsModal] = useModal();

  return (
    <div>
      <Button type="button" onClick={() => toggleIsModal()}>
        Add News
      </Button>
      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <NewsForm />
        </Modal>
      )}
    </div>
  );
};

export default Admin;
