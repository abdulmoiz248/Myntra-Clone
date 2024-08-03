import React from 'react'
import { useDispatch } from 'react-redux'
import { BagActions } from '../store/BagSlice';

export default function BagCard({item}) {
  let dispatch=useDispatch();
  return (
    <div className="p-4 border rounded shadow-sm w-[100%] mb-4 border-blue-300 flex">

   <div>
   <img src={`/${item.image}`} alt={`${item.id}`} className="w-full h-48 object-contain mb-4" />
   </div>


    <div className='block'>
    <h1 className="text-xl font-bold mb-2">{item.item_name}</h1>
    <h2 className="text-lg font-semibold mb-2">Original Price: ${item.original_price}</h2>
    <h2 className="text-lg font-semibold mb-2 text-red-500">Current Price: ${item.current_price}</h2>
    <p className="mb-2">Discount: {item.discount_percentage}%</p>
    <p className="mb-2">Delivery Date: {item.delivery_date}</p>
    <p className="mb-2">Return Period: {item.return_period} days</p>
    </div>

    <div>
      <button className='ml-4 text-white bg-red-800 py-1 px-2 border border-black' onClick={()=>{
           dispatch(BagActions.removeItem(item.id));
      }}>
        X
        </button>
    </div>

    </div>
  )
}
