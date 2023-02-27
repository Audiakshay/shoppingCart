import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth1 from './Layouts/auth';
import Home1 from './pages1/Homepage1/index1';
import Login1 from './pages1/Loginpage/index1';
import Register1 from './pages1/registerpage1/index1';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home1 />,
  },
  {
    path: '/Auth',
    element: <Auth1 />,
    children: [
      {
        index: true,
        element: <Login1 />,
      },
      {
        path: 'Register1',
        element: <Register1 />,
      },
    ],
  },
]);

function App1() {
  return <RouterProvider router={router} />;
}

export default App1;
