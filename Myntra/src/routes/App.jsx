import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Outlet } from'react-router-dom';
import Fetching from '../components/Fetching';
function App() {
 
  return (
    <div>
        <Fetching/>
        <Header/>
        
       <main className='pt-20'>
       <Outlet/>
       </main>
        
        <Footer/>
    </div>
  )
}

export default App
