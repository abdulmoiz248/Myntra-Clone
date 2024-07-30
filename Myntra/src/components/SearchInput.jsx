import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
export default function SearchInput() {
  return (
  
        <div className="flex ml-4 ml-[200px] mr-5 rounded ">
          <AiOutlineSearch className="size-8 mt-5 pr-2 bg-[#D0D0D0] px-[5px]" />
          <input
            type="text"
            placeholder="Search for products,brands & more"
            className="h-[32px] w-[350px] mt-5  bg-[#D0D0D0]  bg-gray-300 text-[black] outline-none pl-2"
          />
        </div>
 
  )
}
