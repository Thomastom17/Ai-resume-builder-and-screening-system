import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import LoginCanditate from './Components-login/LoginCandidate';
import LoginRecruiter from './Components-login/LoginRecruiter';
import ForgotPassword from './Components-login/Forgotpassword';
import Signup from './Components-login/Signup';
import CreatePassword from './Components-login/CreatePassword';
import EmailVerification from './Components-login/EmailVerification';
import OtpVerification from './Components-login/OtpVerification';
import LoginSuccess from './Components-login/LoginSuccess';
import LandingPage from './LandingPage';
import UserRegRecruiter from './Components-login/UserRegRecruiter';
import UserRegCandidate from './Components-login/UserRegCandidate';
import LoginCandidate from './Components-login/LoginCandidate';


const router = createBrowserRouter(
  [
    {
      path: '/Resume-builder',
      element: <LandingPage />,
    },
     {
      path: '/Resume-builder/signup',
      element: <Signup />,
    },
    {
      path: '/Resume-builder/login/candidate',
      element: <LoginCandidate />,
    },
    {
      path: '/Resume-builder/login/recruiter',
      element: <LoginRecruiter />,
    },
    {
      path: '/Resume-builder/login/forgotpassword',
      element: <ForgotPassword />,  
    },
   
    {
      path: '/Resume-builder/login/createpassword',
      element: <CreatePassword />
    },
    {
      path: '/Resume-builder/login/emailverification',
      element: <EmailVerification /> 
    },
    {
      path: '/Resume-builder/login/emailverification/otpverification',
      element: <OtpVerification /> 
    },
    {
      path: '/Resume-builder/login/loginsuccess',
      element: <LoginSuccess /> 
    },
    {
      path: '/Resume-builder/signup/userregrecruiter',
      element: <UserRegRecruiter /> 
    },
    {
      path: '/Resume-builder/signup/userregcandidate',
      element: <UserRegCandidate /> 
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