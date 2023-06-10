import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Teacher from './Components/instructors/Teacher.jsx';
import Header from './Components/header/app/Header.jsx';
import Class from './Components/class/Class.jsx';
import Dashboard from './Components/dasborad/Dashboard.jsx';
import MyClass from './Components/Dasbord/myclass/MyClass.jsx';
import HomeClass from './Components/Dasbord/homeClass/HomeClass.jsx';
import Sing from './Components/sing/Sing.jsx';
import Login from './Components/login/Login.jsx';
import AuthProvider from './Components/provider/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Format from './Components/data/Format.jsx';

import {QueryClient,QueryClientProvider,} from'@tanstack/react-query'

const queryClient = new QueryClient()

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
     },
     {
      path:'sing',
      element:<Sing></Sing>
     },
     {
      path:'login',
      element:<Login></Login>
     },
    //  {
    //   path:'class',
    //   element:<PrivateRoute><Class></Class></PrivateRoute>
    //  }
  ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
          path:'home',
          element:<Header></Header>
        }, 
        {
          path:'myClass',
          element:<MyClass></MyClass>
        },

  ]
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider>
      <React.StrictMode>
         <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
         </QueryClientProvider>
      </React.StrictMode>,
   </AuthProvider>
)
