import React from 'react'
import MenuButtons1 from './MenuButtons1';
import SearchInput from './SearchInput';
import MenuButton2 from './MenuButton2';
import { useNavigate } from 'react-router-dom';


export default function Header() {
   const navigate= useNavigate();
   return (
    <div className='fixed w-[100%] h-[75px]  flex  bg-white'>
       <img src='/images/myntra_logo.webp' className='h-[45px] mt-3 ml-7 mr-5'  onClick={
         ()=>{
            navigate('./');
         }
       }/>     

       <MenuButtons1  />
       <SearchInput/>
       <MenuButton2/>
         
       
    </div>
  )
}
