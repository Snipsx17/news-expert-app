import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewsExpertApp } from './NewsExpertApp';
import './styles/main.scss';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <NewsExpertApp />
  </React.StrictMode>
);
