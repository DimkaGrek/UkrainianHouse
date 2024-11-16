import { useLocation, useSearchParams } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

import { Modal, LogoutModal, SearchBar, NewsForm, BookForm } from "../../components";

import { useModal } from "../../hooks";
import { useDispatch } from "react-redux";
import { setPageBooks, setPageNews } from "../../redux";

export const AdminHeader = () => {
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const location = useLocation();
  const isNewsPage = location.pathname.includes("news");
  const isBooksPage = location.pathname.includes("books");
  const isInboxPage = location.pathname.includes("inbox");

  const [addNewsModal, toggleAddNewsModal] = useModal();
  const [addBookModal, toggleAddBookModal] = useModal();
  const [logoutModal, toggleLogoutModal] = useModal();

  const handleSetQuery = (keyword) => {
    if (isNewsPage) {
      dispatch(setPageNews(0));
    } else if (isBooksPage) {
      dispatch(setPageBooks(0));
    } else if (isInboxPage) {
      // dispatch(setPageInbox(0));
    }

    setSearchParams({ keyword });
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
        className="flex h-[52px] w-[52px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[10px] hover:bg-my-yellow hover:transition-all"
        onClick={toggleLogoutModal}
      >
        <MdOutlineLogout className="size-7 fill-[#1E1E1E]" />
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
