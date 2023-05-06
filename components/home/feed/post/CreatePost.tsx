import React from 'react'
import { FaTimes } from 'react-icons/fa'
import PostHeader from './PostHeader'
import UserInput from './UserInput'

export default function CreatePost() {
  return (
    <div className='overflow-auto  my-filter bg-black/80 fixed z-50 inset-0 w-full  h-[100vh] my-blur bg-black-60 px-4 sm:px-12'>
      <div className='px-2 py-4 mx-auto max-h-[90vh] overflow-auto home-scroll sm:px-4 w-full max-w-[550px] rounded-lg sz mt-12 bg-white'>  
        <PostHeader/>
        <UserInput/>
      </div>
    </div>
  )
}
