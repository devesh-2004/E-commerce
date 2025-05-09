import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className= 'bg-gray-400 flex justify-around items-center p-5 h-33'>
      <input type="text" placeholder='Search Item' className=' p-2 rounded-xl border-3 border-black' />
      <div className='flex items-center justify-center gap-15'>
      <div className='text-3xl cursor-pointer'><FaHeart /></div>
      <div className='text-3xl cursor-pointer'><FaShoppingCart /></div>
      <div className='text-3xl cursor-pointer'><FaRegUser /></div>
      </div>
    </div>
  )
}

export default Header