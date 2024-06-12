// import React from "react"
import { createBrowserRouter } from 'react-router-dom';
import Layout1 from './Pages/Layout1';
import WorkArea from './Pages/WorkArea';
import Layout2 from './Pages/Layout2';
import WorkArea2 from './Pages/WorkArea2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout1 />,
    children: [
      {
        index: true,
        element: <WorkArea />,
      },
      {
        path: 'profile',
        element: <Layout2 />,
        children: [
          {
            path: 'setting',
            element: <WorkArea2 />,
          },
          {
            path: 'contactus',
            element: <div> Contact us Page</div>,
          },
          {
            path: 'login',
            element: <div>Login Signup page</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
