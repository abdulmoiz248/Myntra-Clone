import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import  {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Main from './routes/Main.jsx'
import { Provider } from 'react-redux'
import {store} from './store/index.js';
import Loader from './components/Loader.jsx'

const router=createBrowserRouter([
   {
    path: '/',
    element: <App />,
    children:[
      {
         path:'/',
         element: <Main />,
        //  loader: <Loader/>
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
    <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>,
)
