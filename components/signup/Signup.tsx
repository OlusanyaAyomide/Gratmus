import React from 'react'
import GratImg from '../utils/GratImg'
import { SignUpResource } from '@/public/signup/signupExporter'
import { Typography, signUpfeatures } from '@/utils/landingK'
import SignUPForm from './SignUpForm'
import SliderLayout from '../utils/Layout.tsx/SliderLayout'
import Background from './Background'

export default function Signup() {
  return (
       <section  className='relative overflow-hidden cont py-4 min-h-screen bg-[#18ECDBFF] '>
        <Background/>
      <div className='mb-8 md:mb-4 h-[40px]  w-[126px] md:w-[152px] md:h-[48px]'><GratImg src={SignUpResource.Logo}/></div>
    <div className='md:py-12 flex flex-col md:flex-row gap-y-12 flex-wrap lg:flex-nowrap items-center  justify-center -mt-4'>
      <div className=' md:w-full relative z-20 md:mb-8'>
        <h1 className='font-sarabun text-[48px] text-xl font-[500] sm:text-2xl text-[#424955FF] md:text-[3xl] mb-2 md:mb-4 text-center'>Connect with</h1>
        <div className='flex w-fit mx-auto'> 
        {signUpfeatures.map((item,key)=>{
          return(
            <div key={key} className='mx-2 md:mx-4'>
              <div className=' mx-auto w-[30px] h-[30px]  md:w-[48px] md:h-[48px]'><GratImg src={item.image}/></div>
              <span className='block text-center font-[500] text-[#424955FF] font-sarabun text-lg sm:text-xl'>{item.text}</span>
            </div>
          )
        })}
      </div>
      <p className='mx-auto max-w-[526px] mt-5 hidden md:block base-text leading-[20px]'>{Typography.signUpText}</p>
      </div>
      <div className='md:pl-4 w-full flex justify-center'>
      <div className='rounded-[8px] w-full sm:w-[420px]  relative z-20 lg:w-[450px] bg-white'>
        <SignUPForm/>
      </div>   
      </div>     
    </div>  
    </section>
   

  )
}
