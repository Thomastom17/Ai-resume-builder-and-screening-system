import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Login from './Components-login/Login'
import ForgotPassword from './Components-login/Forgotpassword'
import Signup from './Components-login/Signup'

 const router = createBrowserRouter([
  {
   path: '/Ai-resume/login',
   element: <Login />,
  },
  {
    path: '/Ai-resume/login/forgotpassword',
    element: <ForgotPassword />
  },
  {
    path: '/Ai-resume/signup',
    element: <Signup />
  }

  ])


function App() {
  
  return (
    <>
        <RouterProvider router={router} />
   </>
  )
}

export default App