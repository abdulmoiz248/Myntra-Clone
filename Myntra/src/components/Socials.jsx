import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export default function Socials() {
  return (
    <div className='pt-10 pl-10 mt-7'>
    
     <h2 className='text-red-900'> KEEP IN TOUCH</h2>
     
    <div className='flex space-x-6 pt-4 pb-[100%] pl-inherit'>
      <FaFacebookF className='size-8' onClick={
        ()=>{
       window.open('http://www.facebook.com/myntra', '_blank');
        }
      }/>
      
     
       <FaInstagram  className='size-8' onClick={()=>{
        window.open('https://www.instagram.com/myntra/', '_blank');
 
       }}/>
     
       <FaYoutube  className='size-8' onClick={()=>{
window.open('https://www.youtube.com/user/myntradotcom', '_blank');
       }}/>
    </div>
    </div>
  )
}
