import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import App from './App';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import HomeScreen from './screens/home-screen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomeScreen />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
