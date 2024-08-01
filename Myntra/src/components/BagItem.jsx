import React from 'react'
import BagCard from './BagCard'
export default function BagItem() {
    const item={
        img:'images/1.jpg'
    }
  return (
    <div>
        
        <BagCard item={item}></BagCard>


    </div>
  )
}
