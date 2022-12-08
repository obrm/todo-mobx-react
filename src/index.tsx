import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store, { StoreContext } from './stores/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
    <App />
    </StoreContext.Provider>
  </React.StrictMode>
);

