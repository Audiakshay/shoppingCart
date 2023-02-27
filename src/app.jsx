import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './Layouts/auth';
import DashboardLayout from './Layouts/dashboardLayout';
import About from './pages/About/about';
import Home from './pages/homePage';
import Login from './pages/loginPage';
import Register from './pages/registerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
