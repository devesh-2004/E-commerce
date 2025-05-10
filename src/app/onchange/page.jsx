"use client"
import React from 'react'
import {data} from './db'
import { useState } from 'react'

const page = () => {
const [search, setSearch] = useState('')
  return (
    <>
    <div className='flex justify-center items-center p-12 bg-gradient-to-r from-blue-500 to-violet-700 '>
      <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} className='p-2 rounded-xl border-3 border-black ml-[15%]'/>
    </div>
    <div className='grid grid-cols-3 border-2 border-black bg-gradient-to-r from-blue-400 to-violet-400 p-1 ml-[15%] '>
      {data.map((item,index)=>{
        return(
          <div key={index} className='justify-center items-center border-2 border-black'>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.city}</div>
            <div>{item.country}</div>
            <div>{item.pincode}</div>
            <div>{item.state}</div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default page