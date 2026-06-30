import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Loginpage from './components-login/Loginpage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Loginpage />,
    },
  ])

  return (
    <>
  
      <RouterProvider router={router} />
    </>
  )
}

export default App