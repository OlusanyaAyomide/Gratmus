import React,{useState} from 'react'
import GratImg from '../utils/GratImg'
import { SignUpResource } from '@/public/signup/signupExporter'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import GratButton from '../utils/GratButton'
import Link from 'next/link'

export default function SignUPForm() {
  const [isVisible,setIsVisible] = useState(false)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  return (
    <div className='px-3 sm:px-4 pt-8 pb-16'>
        <h1 className='form-header'>Create an account</h1>
        <p className='text-center base-text my-3'>Start your 30 days free trial</p>
        <div className='flex justify-center'>
          <button className='mx-1 w-[81px] h-[36px] rounded-[18px]'>
            <GratImg src={SignUpResource.Google}/>
          </button>
          <Link href={"/"}><button className='mx-1 w-[81px] h-[36px] rounded-[18px]'>
            <GratImg src={SignUpResource.faceBook}/>
          </button></Link>
       
          <button className='mx-1 w-[81px] h-[36px] rounded-[18px]'>
            <GratImg src={SignUpResource.Apple}/>
          </button>
        </div>
          <form className='mt-1' onSubmit={handleSubmit}>
            <div className='my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px]'>
              <span className="label-text">First Name</span>
              <input type="text" className='w-full input-1 ' />
            </div>
            <div className='my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px]'>
              <span className="label-text">Last Name</span>
              <input type="text" className='w-full input-1' />
            </div>
            <div className='my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px]'>
              <span className="label-text">Email</span>
              <input type="email" className='w-full input-1' />
            </div>
            <div className='my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px]'>
              <span className="label-text">Password</span>
              <input type={isVisible?"text":"password"} className='w-full input-1' />
              <button className='absolute right-3 bottom-2 text-2xl text-grat-black' onClick={()=>{setIsVisible((prev=>!prev))}}>
                  {isVisible?<AiFillEyeInvisible/>:<AiFillEye/>}
              </button>
            </div>
            <GratButton text='Sign Up' className='shadow-lg shadow-grat-green/30 w-full block mt-12'/>
            <h1 className='mt-8 text-center base text'>Been here Before <span className='text-grat-green ml-2'><Link href={"/"}>Log in</Link></span></h1>
          </form>

    </div>
  )
}
