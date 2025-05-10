import React from 'react'
import { data } from '../component/data'

const Page = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-[15%] mt-5 px-2 mb-5">
        {data.map((item, index) => (
          <div key={index} className=" flex flex-col border-1 border-black text-black p-1 rounded cursor-pointer">

          <div className=' overflow-hidden mb-2 object-cover fit-content h-[200px] w-[200px]'>
            <img src={item.img} alt={item.title} />
          </div>

          <div className='flex flex-col justify-between bottom-0'>

            <div className="font-semibold">{item.title}</div>
            <div className='flex gap-1 items-center'>{item.star}<span>{item.reviews}</span></div>
            <div className='flex gap-1 items-center'>{item.prevPrice}<span className='line-through gap-1'></span>{item.newPrice}</div>
            <div>{item.company}</div>
            <div>{item.color}</div>
            <div>{item.category}</div>
          </div>
      </div>
         ))}
      </div>
  )
}
export default Page
