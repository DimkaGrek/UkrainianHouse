import { useSelector } from 'react-redux';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { selectorsNews } from '../../my-redux/News/newsSlice';

const News = () => {
  const [isModal, toggleIsModal] = useModal();

  const news = useSelector(selectorsNews);

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

      <ul>
        {news.length > 0 &&
          news.map(item => {
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.publishDate}</p>
            </li>;
          })}
      </ul>

      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <h2>New modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            labore inventore earum, expedita excepturi nam perferendis
          </p>
        </Modal>
      )}
    </div>
  );
};

export default News;
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchAllNews({ status: 'published', page: 1, limit: 3 }));
// }, [dispatch]);
