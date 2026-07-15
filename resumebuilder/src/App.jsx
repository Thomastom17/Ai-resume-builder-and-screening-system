import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import LoginCanditate from './Components-login-candidate/LoginCandidate';
import LoginRecruiter from './Components-login-recruiter/LoginRecruiter';
import ForgotPassword from './Components-login-candidate/Forgotpassword';
import CreatePassword from './Components-login-candidate/CreatePassword';
import EmailVerification from './Components-login-candidate/EmailVerification';
import OtpVerification from './Components-login-candidate/OtpVerification';
import LoginSuccess from './Components-login-candidate/LoginSuccess';
import LandingPage from './Components-landingpage/LandingPage';
import UserRegRecruiter from './Components-login-recruiter/UserRegRecruiter';
import UserRegCandidate from './Components-login-candidate/UserRegCandidate';
import Landingpage from './Components-landingpage/LandingPage';


const router = createBrowserRouter(
  [
    {
      path: '/Resume-builder/',
      element: <LandingPage />,
    },
    {
      path: '/Resume-builder/login/candidate',
      element: <LoginCanditate />,
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