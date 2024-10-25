import { useLocation } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';

import {
  Modal,
  LogoutModal,
  SearchBar,
  NewsForm,
  BookForm,
} from '../../components';

import { useModal } from '../../hooks';

export const AdminHeader = () => {
  const location = useLocation();
  const isNewsPage = location.pathname.includes('news');
  const isBooksPage = location.pathname.includes('books');
  const isInboxPage = location.pathname.includes('inbox');

  const [addNewsModal, toggleAddNewsModal] = useModal();
  const [addBookModal, toggleAddBookModal] = useModal();
  const [logoutModal, toggleLogoutModal] = useModal();

  const handleSetQuery = query => {
    console.log('Search', query);
  };

  return (
    <header className="flex flex-row items-center gap-4 p-4">
      {isNewsPage && (
        <button
          className="primaryBtn flex-shrink-0"
          type="button"
          onClick={() => toggleAddNewsModal()}
        >
          Add Article
        </button>
      )}
      {isBooksPage && (
        <button
          className="primaryBtn flex-shrink-0"
          type="button"
          onClick={() => toggleAddBookModal()}
        >
          Add Book
        </button>
      )}
      <SearchBar setQuery={handleSetQuery} />
      <button
        type="button"
        className="flex justify-center items-center flex-shrink-0 h-[52px] w-[52px] rounded-[10px] hover:bg-my-yellow hover:transition-all cursor-pointer"
        onClick={toggleLogoutModal}
      >
        <MdOutlineLogout className="fill-[#1E1E1E] size-7" />
      </button>
      {logoutModal && (
        <Modal toggleModal={toggleLogoutModal}>
          <LogoutModal toggleModal={toggleLogoutModal} />
        </Modal>
      )}
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
    </header>
  );
};
