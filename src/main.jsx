import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonationDetails from './Components/Donations/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donations',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('../public/donations.json')
      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
