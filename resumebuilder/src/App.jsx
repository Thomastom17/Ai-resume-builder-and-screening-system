import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import Login from './Components-login/Login';
import ForgotPassword from './Components-login/Forgotpassword';
import Signup from './Components-login/Signup';
import CreatePassword from './Components-login/CreatePassword';
import EmailVerification from './Components-login/EmailVerification';
import OtpVerification from './Components-login/OtpVerification';
import LoginSuccess from './Components-login/LoginSuccess';


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
    },
    {
      path: '/Ai-resume/login/createpassword',
      element: <CreatePassword />
    },
    {
      path: '/Ai-resume/login/emailverification',
      element: <EmailVerification /> 
    },
    {
      path: '/Ai-resume/login/emailverification/otpverification',
      element: <OtpVerification /> 
    },
    {
      path: '/Ai-resume/login/loginsuccess',
      element: <LoginSuccess /> 
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