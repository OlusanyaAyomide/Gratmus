import React from 'react'
import BarChart from './BarChart'
import { AnalyticsData } from '@/utils/Homek'
import GratImg from '../utils/GratImg'

export default function Analytics() {
  return (
    <div className='border  border-grat-light-text/10 pt-6 pb-6 sm:px-4  rounded-[6px] mx-auto'>
      <h1 className='text-xl font-semibold mb-4 text-center xl:text-left xl:pl-3'>Analytics this month</h1>
      <div className='flex gap-y-3 flex-wrap xl:flex-nowrap justify-evenly '>
        <div>
        <BarChart/>
        </div>
          {AnalyticsData.map((item,key)=>{
            return(
              <div className=' sm:mx-2' key={key}>
                  <div key={key} className='light-border w-[145px] sm:w-[173px] px-3 py-6'>
                <div className='w-[24px] h-[24px] mb-3'>
                  <GratImg src={item.image}/>
                </div>
                <p className='text-sm'>{item.text}</p>
                <p className='text-grat-light-text mt-3'>{item.text}</p>
              </div>
              </div>
        
            )
          })}
      </div>
    </div>
  )
}
