import React from 'react'

const Recommended = () => {
  return (
    <div className='bg-gray-400 flex flex-col text-2xl ml-[15%] p-5'>
    <h1 className='text-2xl font-bold text-black mb-5 mt-0.5'>Recommended</h1>
    <div className='flex gap-3 text-xl text-black'>
        <button className='bg-black p-2'>All</button>
        <button className='bg-black p-2'>Nike</button>
        <button className='bg-black p-2'>Adidas</button>
        <button className='bg-black p-2'>Puma</button>
        <button className='bg-black p-2'>Reebok</button>
        <button className='bg-black p-2'>New Arrivals</button>
    </div>
    </div>
  )
}

export default Recommended