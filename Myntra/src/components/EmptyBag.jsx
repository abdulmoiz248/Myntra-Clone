import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function EmptyBag() {
    let navigate=useNavigate();
  return (
    
     <div className='flex flex-col justify-center items-center border-2 ml-[25%] border-blue-500 p-8 rounded mb-3'>
     <h1 className='text-2xl text-blue-500'>Oops..!!</h1>
       <h2 className='text-xl mb-3'>Your bag is empty</h2>
       <button onClick={()=>{
    navigate('/');      
}} 
className="mt-2 inline-block px-11 py-4 bg-blue-400 rounded-full shadow-md shadow-blue-400 text-lg font-semibold text-gray-900 tracking-wider transition duration-500 ease-in-out hover:shadow-none">
  Shop <span className="text-white">Now</span>
</button>    
    </div>
)
}
