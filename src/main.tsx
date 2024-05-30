import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/index.ts';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
