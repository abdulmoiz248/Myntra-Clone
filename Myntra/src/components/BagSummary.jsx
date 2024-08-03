import React from 'react'
import {useDispatch} from 'react-redux'
import { BagActions } from '../store/BagSlice';

export default function BagSummary({items}) {
  let dispatch=useDispatch();
  return (
    <div className='border-2  border-blue-500 rounded mt-3 py-4 px-6 ml-20 bg-white'>
       <center>
       <h1 className='font-bold text-2xl text-blue-500 mb-2 '>Total</h1>
       </center>
        <h3 className='font-bold text-l text-blue-500'>Total items: <span className='text-black'> {items.length} </span> </h3>
        <h3 className='font-bold text-l text-blue-500'>Original price: <span className='text-black'> ${items.reduce((acc, item) => acc + item.original_price, 0)}</span></h3>
        <h3 className='font-bold text-l text-blue-500'>Total price: <span className='text-black'>${items.reduce((acc, item) => acc + item.current_price, 0)}</span></h3>
        <h3 className='font-bold text-l text-blue-500'>Return Period: <span className='text-black'>14 days</span> </h3>
        <button onClick={()=>{
              dispatch(BagActions.checkout());             
}} 
className="mt-2 inline-block px-11 py-4 bg-blue-400 rounded-full shadow-md shadow-blue-400 text-lg font-semibold text-gray-900 tracking-wider transition duration-500 ease-in-out hover:shadow-none">
  Check <span className="text-white">out</span>
</button>

    </div>
  )
}
