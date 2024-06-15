import {  RouterProvider } from 'react-router-dom'
import UserProvider from '../src/context/UserContext'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import router from './utils/routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);



