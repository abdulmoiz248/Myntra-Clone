import React, { useState } from 'react'
import DropDown from './DropDown';

export default function Headeritems({name,list}) {
 let [hovered,sethovered] =useState(false);
  return (
    
    <div onMouseEnter={()=>{
      sethovered(true);
    }} onMouseLeave={()=>{
      sethovered(false);
    }} 
    className='hover:border-b-2 hover:border-b-black relative'>
        <a>{name}</a>
        {hovered && <DropDown list={list}/>}
    </div>

  )
}
