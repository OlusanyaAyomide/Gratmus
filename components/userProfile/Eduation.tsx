import React from 'react'
import GratImg from '../utils/GratImg'
import { EducationList } from '@/utils/landingK'
import {GiGraduateCap} from "react-icons/gi"
import { FaCalendar } from 'react-icons/fa'

export default function Eduation() {
  return (
    <div className='mt-4 mb-4 light-border px-2 sm:px-4'>
     <h1 className='text-xl font-semibold my-8'>Education</h1>
     <div>
      {EducationList.map((item,key)=>{
        return(
        <div key={key} className='flex mb-6'>
          <div>
            <div className='w-[48px] h-[48px] sm:w-[60px] sm:h-[60px]'>
              <GratImg src={item.logo}/>
            </div>
          </div>
          <div className='pl-1 xs:pl-3'>
            <h1 className='text-base font-semibold mb-2'>{item.name}</h1>
            <h1 className='text-xs mb-1 text-grat-light-text flex'>
              <span className='mr-1'>{<GiGraduateCap/>}</span>
              <span>{item.text}</span>
            </h1>
            <h1 className='text-xs text-grat-light-text flex'>
              <span className='mr-1'>{<FaCalendar/>}</span>
              <span>{item.duration}</span>
            </h1>
          </div>
        </div>
        )
      })}
      
     </div>
    </div>
  )
}
