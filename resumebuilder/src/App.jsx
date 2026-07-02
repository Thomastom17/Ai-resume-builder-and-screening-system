import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import Login from './Components-login/Login';
import ForgotPassword from './Components-login/Forgotpassword';
import Signup from './Components-login/Signup';
import CreatePassword from './Components-login/CreatePassword';


const router = createBrowserRouter(
  [
    {
      path: '/Ai-resume/login', 
      element: <Login />,
    },
    {
      path: '/Ai-resume/login/forgotpassword',
      element: <ForgotPassword />,
    },
    {
      path: '/Ai-resume/signup',
      element: <Signup />,
    }
    ,
    {path: '/Ai-resume/login/createpassword',
      element: <CreatePassword />
    }
  ],
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;