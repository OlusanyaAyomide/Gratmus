import React,{useState} from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import GratButton from '../utils/GratButton'


export default function LogInForm() {
  const [isVisible,setIsVisible] = useState(false)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  return (
   <div className='pt-4 pb-12'>
    <h1 className='form-header'>Sign in</h1>
    <form className='w-full px-4 sm:px-12 mt-12' onSubmit={handleSubmit}>
        <div className='rounded-md my-8 bg-[#F3F4F6FF] p-3'>
          <span className="label-text pl-0">Email</span>
          <input type="email" className='input-2' placeholder='example@gmail.com' />
        </div>
        <div className='rounded-md my-8 bg-[#F3F4F6FF] p-3 relative'>
          <span className="label-text pl-0">Password</span>
          <input type={!isVisible?"password":"text"} className='input-2' placeholder='Enter At least 8+ character' />
          <button className='absolute right-3 bottom-2 text-2xl text-grat-black' onClick={()=>{setIsVisible((prev=>!prev))}}>
                  {isVisible?<AiFillEyeInvisible/>:<AiFillEye/>}
            </button>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex'>
            <input  type="checkbox" className='checked:bg-grat-green' />
            <span className='base-text ml-2'>Remember me</span>
          </div>
          <span className='base-text text-grat-green'>forgot password</span>
        </div>
        <GratButton text='Sign in' className='shadow-lg shadow-grat-green/30 w-full block mt-12'/>


    </form>
   </div>
  )
}
