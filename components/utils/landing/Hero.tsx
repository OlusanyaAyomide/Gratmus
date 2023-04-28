import { Typography } from '@/utils/landingK'
import React from 'react'
import GratButton from '../GratButton'
import HeroView from "./HeroView"
import Counter from './Counter'

export default function Hero() {
  return (
    <div className='bg-grat-light-green justify-center relative z-20 min-h-screen flex flex-wrap md:flex-nowrap items-center cont'>
        <div className='w-full md:pr-3 lg:px-16 mb-2 flex flex-col justify-center min-h-[70vh]'>
            <Counter/>
            <p className='mt-2 lg:w-[500px] base-text'>{Typography.heroText}</p>
            <div className='mt-3 flex gap-x-3'>
                <GratButton text='join now'/>
                <GratButton text='join now' type={2} className='ml-1 xs:ml-4 px-[38px] sm:px-[46px] py-2 sm:py-3'/>
            </div>
        </div>
        <div>
        <div className='mb-2 w-[360px] h-[360px]'>
          <HeroView/>
        </div>
        </div>
      
    </div>
  )
}
