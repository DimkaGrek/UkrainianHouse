import { useDispatch } from "react-redux";

import { logoutThunk } from "../../redux";

export const LogoutModal = ({ toggleModal }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="py-10 text-center text-xl">Are you sure you want to log out?</h1>
      <div className="flex gap-4">
        <button type="button" className="primaryBtn w-1/2" onClick={toggleModal}>
          Cancel
        </button>
        <button type="button" className="primaryBtn w-1/2" onClick={() => dispatch(logoutThunk())}>
          Logout
        </button>
      </div>
    </div>
  );
};
