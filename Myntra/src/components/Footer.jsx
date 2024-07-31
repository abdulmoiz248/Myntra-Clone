import React from 'react'
import DropDown from './DropDown';
import { list } from './FooterList';
import Socials from './Socials';
export default function Footer() {
  return (
    <div className=' shadow-[0px_20px_30px_12px_#FAF9F6,0px_3px_8px_0px_black]  mt-96 flex'>
     <DropDown list={list}/>
       <Socials/>
    </div>
  )
}
