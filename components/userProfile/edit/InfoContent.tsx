import React, { useState } from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import AddSkills from './AddSkills'
import {BsInfoCircleFill} from "react-icons/bs"
export default function InfoContent() {
  return (
  <div>
    <div className='flex flex-wrap justify-between mt-3'> 
    <div className='w-full md:w-6/12  md:pr-4'>
      <span className='text-grat-light-text block ml-1 mb-[2px] '>Name</span>
      <input type="text" className='py-1 outline-none px-2 w-full bg-grat-offwhite' placeholder='Jay Rutherford'/>
    </div>
    <div className='w-full md:w-6/12 md:flex flex-wrap justify-end md:pl-4 '>
    <span className='text-grat-light-text w-full mb-[2px]'>Title</span>
    <div className='py-1 px-2 w-full bg-grat-offwhite  flex items-center justify-between'>
      <span className='text-grat-thick'>Professional Title</span>
      <span className='text-xl'><IoMdArrowDropdown/></span>
    </div>
    </div>
  </div>
  <AddSkills/>
  <div className='mt-3'>
    <span className="block">Description</span>
    <textarea name="" className='w-full resize-none mt-1 bg-grat-offwhite px-2 rounded-sm h-[80px]'>
    </textarea>
    <div className='text-grat-orange py-[2px] rounded-sm bg-grat-light-orange'>
      <h1 className='text-center text-xs xl:text-sm'><span className="text-grat-orange mr-1"></span> <span>This is How Talent figueres what you need and why yoy are great to work with</span></h1>
    </div>
    <h1 className="flex items-center justify-end mt-2 text-right text-base text-grat-green">
      <span>More options</span>
      <span className='text-xl relative top-[2px] ml-2'><IoMdArrowDropdown/></span>
    </h1>
  </div>
  </div> 

  )
}
