// import React from 'react'
// import { data } from './component/data'

// const page = () => {
//   return (
//     <div className='ml-[15%]'>
//     <div> {data.map((item, index) => {
//       return (
//         <div className='flex gap-4 p-2 border-2 border-black text-black w-[250px]'>
//         <div key={index}>
//           <img src={item.img} alt=""/>
//           <div>{item.title}</div>
//           <div>{item.star}</div>
//           <div>{item.reviews}</div>
//           <div>{item.prevPrice}</div>
//           <div>{item.newPrice}</div>
//           <div>{item.company}</div>
//           <div>{item.color}</div>
//           <div>{item.category}</div>
//         </div>
//         </div>
//       )
//     })}
//     </div>
//     </div>
//   )
// }

// export default page

import React from 'react'
import { data } from './component/data'

const Page = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-[15%] mt-5">
        {data.map((item, index) => (
          <div key={index}
            className="border-2 border-black text-black p-1 rounded cursor-pointer hover:bg-gray-200">

            <img src={item.img} alt={item.title} className="object-cover mb-2 fit-content" />
            <div className="font-semibold">{item.title}</div>
            <div>{item.star}</div>
            <div>{item.reviews}</div>
            <div className="line-through text-gray-500">{item.prevPrice}</div>
            <div className="text-green-600">{item.newPrice}</div>
            <div>{item.company}</div>
            <div>{item.color}</div>
            <div>{item.category}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
