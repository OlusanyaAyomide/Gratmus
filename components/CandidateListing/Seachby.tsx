import React from 'react'
import { FaAngleDown, FaSearch } from 'react-icons/fa'
import DropDown from './DropDown'

export default function Seachby() {


  return (
    <div className='mt-12 cont'>
      <h1 className='font-semibold mb-3 sm:mb-6  text-2xl sm:text-3xl lg:text-4xl'>Explore <span className='text-grat-green'>Talents</span></h1>
      <div className='flex flex-wrap items-end xl:flex-nowrap mt-2'>
        <div className='w-full max-w-[400px] xl:pr-7 xl:w-[350px] mb-3 xl:mb-0 '>
          <span className="block font-semibold mb-1 sm:text-lg">Search</span>
          <div className='xl:border-grat-light-text/30 xl:border-r xl:pr-7'>
            <div className='flex items-center overflow-hidden rounded-[6px] px-2 bg-grat-light-gray '>
              <span className='text-xl md:pl-2 mr-1'><FaSearch/></span>
              <input type="text" className='px-2 py-2 outline-none bg-transparent w-full' />
            </div>
          </div>
      
          <div className=''>
          </div>
        </div>
        <div className='w-full xl:w-fit xl:flex xl:relative'>
          <span className='block xl:absolute sm:text-lg left-2 bottom-[40px]  font-semibold mb-1 sm:text-lg">'>Filter</span>
          <div className='flex items-center mb-4 xl:mb-0'>
            <DropDown text='Location'/>
            <DropDown text='Experience'/>
          </div>
          <div className='flex items-center '>
          <DropDown text='Industry'/>
          <DropDown text='Company'/>
          </div>
        </div>
      </div>
    </div>
  )
}
