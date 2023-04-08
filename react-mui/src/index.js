import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'
import {reducer as employeeReducer} from './slices/employee/employeeSlice'
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
      employeeReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
