import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import  {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Main from './routes/Main.jsx'
const router=createBrowserRouter([
   {
    path: '/',
    element: <App />,
    children:[
      {
         path:'/',
         element: <Main />
      },
      {
       path:'/bag',
       element:<Bag/>
      }
    ]
   }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
