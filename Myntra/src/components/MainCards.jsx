import React from 'react'
export default function MainCards({item}) {
  console.log(item.image);
  return (
    <div className="p-4 border rounded shadow-sm w-1/3 border-blue-300">
    <img src={`/${item.image}`} alt={`${item.id}`} className="w-full h-48 object-contain mb-4" />
    <h1 className="text-xl font-bold mb-2">{item.item_name}</h1>
    <h2 className="text-lg font-semibold mb-2">Original Price: ${item.original_price}</h2>
    <h2 className="text-lg font-semibold mb-2 text-red-500">Current Price: ${item.current_price}</h2>
    <p className="mb-2">Discount: {item.discount_percentage}%</p>
    <p className="mb-2">Delivery Date: {item.delivery_date}</p>
    <p className="mb-2">Return Period: {item.return_period} days</p>
    <p className="mb-2">Rating: {item.rating.stars} stars ({item.rating.count} reviews)</p>
    <center>
    <button className="mt-2 inline-block px-11 py-4 bg-blue-400 rounded-full shadow-md shadow-blue-400 text-lg font-semibold text-gray-900 tracking-wider transition duration-500 ease-in-out hover:shadow-none">
      Add to <span className="text-white">Cart</span>
    </button>
    </center>
</div>
  )
}
