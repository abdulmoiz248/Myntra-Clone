import React ,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import  {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './routes/Main.jsx'
import { Provider } from 'react-redux'
import {store} from './store/index.js';
import Loader from './components/Loader.jsx'
const Bag= lazy(()=>(import ('./routes/Bag.jsx'))); 


const router=createBrowserRouter([
   {
    path: '/',
    element: <App />,
    children:[
      {
         path:'/',
         element: <Main />,
        
      },
      {
       path:'/bag',
       element:(<Suspense fallback={<Loader/>}>
        <Bag/>
       </Suspense>)
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
