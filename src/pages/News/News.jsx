import { Advertisement } from '../../components/Advertisement/Advertisement';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButton';
import { Modal } from '../../components/Modal/Modal';
import { NewsList } from '../../components/NewsList/NewsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useModal } from '../../hooks/useModal';

const News = () => {
  const [isModal, toggleIsModal] = useModal();

  const handleOpenModal = () => {
    toggleIsModal();
  };

  return (
    <div className="container">
      <div className="hidden  md:flex justify-between items-center mb-[40px] lg:mb:[44px]">
        <h3 className="font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]">
          News
        </h3>
        <SearchBar />
      </div>
      <Advertisement />
      <NewsList />
      <LoadMoreButton />
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
