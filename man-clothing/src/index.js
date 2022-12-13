import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './util/store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/scrolltop/scrollToTop';
import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const onBeforeLift = () => (<h1>loading....</h1>);


root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
        <BrowserRouter>  
        <ScrollToTop/>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
