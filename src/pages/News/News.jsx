import { Modal } from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";

const News = () => {
  const [isModal, toggleIsModal] = useModal();

  const handleOpenModal = () => {
    toggleIsModal();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="rounded-[10px] bg-blue-600 p-[10px]"
      >
        Open modal
      </button>
      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <h2>New modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            labore inventore earum, expedita excepturi nam perferendis
            temporibus alias modi consequatur optio reiciendis saepe a nemo
            exercitationem error, soluta quibusdam assumenda?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            labore inventore earum, expedita excepturi nam perferendis
            temporibus alias modi consequatur optio reiciendis saepe a nemo
            exercitationem error, soluta quibusdam assumenda?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            labore inventore earum, expedita excepturi nam perferendis
            temporibus alias modi consequatur optio reiciendis saepe a nemo
            exercitationem error, soluta quibusdam assumenda?
          </p>
        </Modal>
      )}
    </div>
  );
};

export default News;
