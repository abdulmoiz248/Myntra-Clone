import React from 'react'
import Headeritems from './Headeritems';
import { items } from './List';


export default function MenuButtons1() {
  return (
    <div className='flex space-x-6 mt-6 '>
        { items.map((item,index)=>(
            <Headeritems key={index} name={item.name} list={item.list} />
        
        ))}
    </div>
  )
}
