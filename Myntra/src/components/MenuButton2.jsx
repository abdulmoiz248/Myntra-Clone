import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function MenuButton2() {
  const navigate = useNavigate();
  return (
    <div className='flex space-x-7'>
      <div className='flex items-center mt-5 flex-col'>

      <CgProfile  className='size-5 '></CgProfile>
      <h1>Profile</h1> 
      </div>
      
      <div className='flex items-center mt-5 flex-col'>
      <CiHeart  className='size-5' />
      <h1>WishList</h1>
      </div>  

      <div className='flex items-center mt-5 flex-col ' onClick={
        ()=>{
          
          navigate('/bag');
          
        }
      } >
      <MdOutlineShoppingBag  className='size-5' /> 
      <h1>Bag</h1>
      </div> 

    </div>
  )
}
