import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export default function Socials() {
  return (
    <div className='flex space-x-6'>
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
  )
}
