import { WorkingExperience } from '@/utils/Homek'
import React from 'react'
import GratImg from '../utils/GratImg'
import Viewmore from '../utils/Viewmore'

export default function Experience() {
  return (
    <div className='mt-6 light-border py-6 px-2 sm:px-4'>
      <h1 className='font-semibold text-xl mb-4'>Working Experience</h1>
      <div className='mt-4'>
        {WorkingExperience.map((item,key)=>{
          return(
            <div className='mb-12 sm:mb-16 flex' key={key}>
              <div>
                <div className='h-[48px] w-[48px] sm:h-[60px] sm:w-[60px]'>
                  <GratImg src={item.logo}/>
                </div>
              </div>
              <div className='w-full pl-1 sm:pl-3'>
                <div className='flex mb-1 flex-wrap'>
                  <span className='text-base font-semibold'>{item.title}</span>
                  {item.working && <button className='ml-2 sm:ml-6 py-1 px-2 text-grat-green bg-grat-profile-green/10 text-sm rounded-md'>Working</button>}
                </div>
                <div className='text-grat-light-text text-sm mb-3'>
                  <div className='flex flex-wrap'>
                    {item.roles.map((item,key)=>{
                      return <div key={key} className='mx-[2px] pr-3 mb-[2px] border-r border-grat-light-text/30 text-sm text-grat-light-text'>{item}</div>
                    })}
                    <span className='text-sm text-grat-light-text'>{item.date}</span>
                  </div>
                </div>
                <Viewmore className='text-sm' text={item.description} style='text-grat-green ml-2' length={30} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
