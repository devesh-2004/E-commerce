import React from 'react'
import { FaBagShopping } from "react-icons/fa6";

const Category = () => {
  return (
    <div className='bg-gray-400 flex flex-col text-lg h-screen w-[15%] fixed p-8 gap-2
     border-left-2 border-black'>
        <div className='text-5xl p-3 justify-center flex cursor-pointer'><FaBagShopping /></div>
            <br></br>
        <form>
              <p className='text-black text-2xl font-bold mb-5'>Category</p>
              <div className='flex flex-col gap-2 mr-5'>
              <label>
                        <input type="radio" name="shoes" value="all" className='text-white cursor-pointer' /> All
              </label>
              <label>
                        <input type="radio" name="shoes" value="sneakers" className='text-white cursor-pointer' /> Sneakers
              </label>
              <label>
                        <input type="radio" name="shoes" value="flats" className='text-white cursor-pointer' /> Flats
              </label>
              <label>
                        <input type="radio" name="shoes" value="heels" className='text-white cursor-pointer' /> Heels
              </label>
              </div>
        </form>
        
        <form>
              <p className='text-black text-2xl font-bold mb-5'>Price</p>
              <div className='flex flex-col gap-2 mr-5'>
              <label>
                        <input type="radio" name="shoes" value="$50-$100" className='text-white cursor-pointer' />  $50-$100
              </label>
              <label>
                        <input type="radio" name="shoes" value="$100-$150" className='text-white cursor-pointer' />  $100-$150
              </label>
              <label>
                        <input type="radio" name="shoes" value="$150-$200" className='text-white cursor-pointer' />  $150-$200
              </label>
              <label>
                        <input type="radio" name="shoes" value="$200-$250" className='text-white cursor-pointer' />  $200-$250
              </label>
              </div>
        </form>
        <form>
              <p className='text-black text-2xl font-bold mb-5'>Color</p>
              <div className='flex flex-col gap-2 mr-5'>
              <label>
                        <input type="radio" name="shoes" value="All" className='text-white cursor-pointer' />  All
              </label>
              <label>
                        <input type="radio" name="shoes" value="Blue" className='text-white cursor-pointer' /> Blue
              </label>
              <label>
                        <input type="radio" name="shoes" value="Black" className='text-white cursor-pointer' />  Black
              </label>
              <label>
                        <input type="radio" name="shoes" value="Red" className='text-white cursor-pointer' />  Red
              </label>
              </div>
        </form>
    </div>
  )
}

export default Category