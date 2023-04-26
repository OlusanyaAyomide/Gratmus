import React from 'react'
import GratImg from '../utils/GratImg'
import Link from 'next/link'
import { SignUpResource } from '@/public/signup/signupExporter'

export default function FormHeader() {
  return (
    <>
        <h1 className='form-header'>Create an account</h1>
        <p className='text-center base-text my-3'>Start your 30 days free trial</p>
        <div className='flex justify-center'>
          <button className='mx-1 w-[81px] h-[36px] rounded-[18px]'>
            <GratImg src={SignUpResource.Google} piority={true}/>
          </button>
          <Link href={"/"}><button className='mx-1 w-[81px] h-[36px] rounded-[18px]'>
            <GratImg src={SignUpResource.faceBook} piority={true}/>
          </button></Link>
       
          <button className='mx-1 w-[81px] h-[36px] rounded-[18px]'>
            <GratImg src={SignUpResource.Apple} piority={true}/>
          </button>
        </div>
    </>
  )
}
