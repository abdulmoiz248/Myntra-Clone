import React from 'react'
import DropDownItems from './DropDownItems';

export default function DropDown({list}) {
         
  return (
    <div className='absolute flex  bg-white z-10'>
      {list.map((item)=>(
  
         <DropDownItems key={item.name} name={item.name} items={item.items} />
      ))}
    </div>
  )
}
