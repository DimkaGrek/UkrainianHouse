import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";

import { Modal, LogoutModal, SearchBar, NewsForm, BookForm } from "../../components";

import { useModal } from "../../hooks";
import { setPageBooks, setPageMessages, setPageNews } from "../../redux";

export const AdminHeader = () => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const currentPage = [
    { key: "news", action: setPageNews, buttonText: "Add Article", modal: NewsForm },
    { key: "books", action: setPageBooks, buttonText: "Add Book", modal: BookForm },
    { key: "inbox", action: setPageMessages },
  ].find((page) => location.pathname.includes(page.key));

  const [addModal, toggleAddModal] = useModal();
  const [logoutModal, toggleLogoutModal] = useModal();

  const handleSetQuery = (keyword) => {
    if (currentPage) {
      dispatch(currentPage.action(0));
    }
    setSearchParams({ keyword });
  };

  return (
    <header className="flex flex-row items-center gap-4 p-4">
      {currentPage?.buttonText && (
        <button className="primaryBtn flex-shrink-0" type="button" onClick={toggleAddModal}>
          {currentPage.buttonText}
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
      {addModal && currentPage?.modal && (
        <Modal toggleModal={toggleAddModal}>
          <currentPage.modal toggle={toggleAddModal} />
        </Modal>
      )}
    </header>
  );
};
