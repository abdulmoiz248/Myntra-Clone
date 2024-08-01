import React from 'react'
import MenuButtons1 from './MenuButtons1';
import SearchInput from './SearchInput';
import MenuButton2 from './MenuButton2';
import { useNavigate } from 'react-router-dom';


export default function Header() {
   const navigate= useNavigate();
   return (
    <div className='fixed w-[100%] h-[75px]  flex shadow-[0px_20px_30px_12px_#FAF9F6,0px_3px_8px_0px_black] bg-white'>
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
