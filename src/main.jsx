import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import NewsDetails from './NewsPortal/NewsDetails';
import FashionDetails from './Fashion/FashionDetails';
import Fashion from './Fashion/Fashion';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/news/:title',
        element:<NewsDetails/>
      },
      {
        path:'/fashion',
        element:<Fashion/>
      },
      {
        path:'/fashion/:title',
        element:<FashionDetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='min-h-screen bg-white' >
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
