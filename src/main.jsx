import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Teacher from './Components/instructors/Teacher.jsx';
import Header from './Components/header/app/Header.jsx';
import Class from './Components/class/Class.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element:<Header></Header>
      },
      {
        path:'home',
        element:<Header></Header>
      },
      {
        path:'instructors',
        element:<Teacher></Teacher>
     },
     {
      path:'classes',
      element:<Class></Class>
     }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
