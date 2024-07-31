import React from 'react'

export default function DropDownItems({name,items}) {
    console.log(items);
  return (
     
    <div className='mt-10 ' >
        <h1 className='text-red-900 ml-4'>{name}</h1>
        <ul>
            {items.map(item => (
                <li key={item} className='ml-4 text-[13px]'>{item}</li>
            ))}
        </ul>
    </div>
  )
}
