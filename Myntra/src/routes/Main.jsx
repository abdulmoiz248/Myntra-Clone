import React from 'react'
import {useSelector} from 'react-redux';
import MainCards from '../components/MainCards';

export default function Main() {
  let items=useSelector(store=>store.items);
  
  return (
    <div className=''>
      
      <img src='/images/flat.png' alt='flat' className='ml-[8%] mt-[3%]'/>
      <img src='/images/discount.png' alt='Discount' className='ml-[5%] mt-[2%]' />
  
      <MainCards/>
     
    </div>
  )
}
