import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './my-redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <BrowserRouter basename="/UkrainianHouse">
      <App />
    </BrowserRouter>
  </Provider>
);
