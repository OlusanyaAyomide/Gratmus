import React from 'react'
import GratImg from '../utils/GratImg'
import LogInForm from './LogInForm'
import { SignUpResource } from '@/public/signup/signupExporter'
import Background from './Background'

export default function Login() {
  return (
    <section className='cont bg-[#B8825C] min-h-screen pt-2 pb-12 md:pb-36 relative overflow-hidden'>
      <Background/>
      <div className='w-[96px] h-[32px]  sm:w-[118px] sm:h-[40px] mb-12 md:mb-36'>
        <GratImg src={SignUpResource.LogInLogo}/>
      </div>
      <div className='h-full flex items-center justify-center relative z-20'>
        <div className='rounded-lg overflow-hidden flex w-full justify-center'>
          <div className='py-12  w-full  max-w-[445px] bg-white'>
          <LogInForm/>
          </div>
          <div className='hidden lg:flex h-[568px] items-center bg-grat-green'>
            <div className='w-[445px] h-[418px]'>
              <GratImg src={SignUpResource.Dancing} piority={true}/>
            </div>
        </div>

        </div>
      </div>
    </section>
  )
}
