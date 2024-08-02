import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Outlet } from'react-router-dom';
import Fetching from '../components/Fetching';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
function App() {
   let fetchStatus=useSelector(store=>store.fetch);

  return (
    <div>
      
        <Header/>
        <Fetching/>
       <main className='pt-20'>
       {fetchStatus.fetching ? <Loader/>: <Outlet/>}  
      

       </main>
        
        <Footer/>
    </div>
  )
}

export default App
