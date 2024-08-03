import React from 'react'
import BagCard from './BagCard'
import MainCards from './MainCards';
import {useSelector} from 'react-redux';
export default function BagItem({items}) {
    //let items=useSelector(store=>store.bag)
  
  return (
    <div className='block w-[50%] ml-10'>
     { items.map((item)=>(
           <BagCard key={item.id} item={item}/>
      ))}
    </div>
  )
}
