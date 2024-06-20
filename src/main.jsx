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
import DailyUpdate from './DailyUpdate/DailyUpdate';
import DailyUpdateDetail from './DailyUpdate/DailyUpdateDetail';
import Food from './Food/Food';
import FoodDetails from './Food/FoodDetails';


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
        path:'/update',
        element:<DailyUpdate/>
      },
      {
        path:'/update/:title',
        element:<DailyUpdateDetail/>
      },
      {
        path:'/food',
        element:<Food/>
      },
      {
        path:'/food/:id',
        element:<FoodDetails/>
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
