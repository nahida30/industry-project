import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Components/NavBar.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    // element: <Navbar></Navbar>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
