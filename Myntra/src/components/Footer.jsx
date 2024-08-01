import React from 'react'
import DropDown from './DropDown';
import { list } from './FooterList';
import Socials from './Socials';
import { GiReturnArrow } from "react-icons/gi";
export default function Footer() {
  return (
    <div className='shadow-[0px_20px_30px_12px_#FAF9F6,0px_3px_8px_0px_black] mt-10 flex justify-center align-middle'>
    <div>
      <DropDown list={list} />
    </div>
    <div className='ml-[35%] '>
      <Socials />
    </div>
    <div className='mt-[5%] ml-10'>
      <h3 className='text-red-900'>100% ORIGINAL guarantee for all products at myntra.com</h3>
      <div className='flex'>
      <GiReturnArrow />
      <h3><b>Return within 14days </b>of receiving your order</h3>
      </div>
    </div>
  </div>
     

  )
}
