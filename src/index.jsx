import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, Zoom } from "react-toastify";

import App from "./components/App";

import { persistor, store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/UkrainianHouse">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          autoClose={3000}
          closeOnClick={true}
          transition={Zoom}
          style={{ zIndex: 999 }}
        />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
