import React from 'react'
import Headeritems from './Headeritems';

const items=[{name: 'Men'},{name: 'Women'},{name: 'Kids'},{name: 'Home & Living'},{name: 'Beauty'},{name: 'Studio'}];

export default function MenuButtons1() {
  return (
    <div className='flex space-x-6 mt-6'>
        { items.map((item,index)=>(
            <Headeritems key={index} name={item.name} />
        
        ))}
    </div>
  )
}
