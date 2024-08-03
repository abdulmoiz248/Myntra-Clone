import React from 'react'
import BagItem from '../components/BagItem'
import BagSummary from '../components/BagSummary'
import { useSelector } from 'react-redux'
import EmptyBag from '../components/EmptyBag';

export default function Bag() {
  let items=useSelector(store=>store.bag);
  
  return (
    <div className='flex'>
     {items.length==0?<EmptyBag/>:<BagItem items={items}/>}
     <div className='fixed ml-[60%]'>
     <BagSummary items={items}/>
     </div>
    </div>
  )
}
