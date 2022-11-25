import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Schedule from './views/Schedule';
import Quiz from './views/Quiz';
import Career from './views/Career';
import Article from './views/Article';

const router = createBrowserRouter([
  { path: '/', element: <App /> }, // this is login
  { path: '/register', element: <Register /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/schedule', element: <Schedule /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/career', element: <Career /> },
  { path: '/dashboard/article/:careertype', element: <Article /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
