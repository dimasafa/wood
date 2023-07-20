import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './frontend/components/App/App';

const root = document.getElementById('root');
// @ts-ignore
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);