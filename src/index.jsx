import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './my-redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/UkrainianHouse">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
