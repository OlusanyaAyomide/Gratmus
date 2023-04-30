import { Notifications } from '@/utils/Homek'
import React from 'react'

interface promotedInterface{
  title?:string
  title2?:string
  array:{
    role:string
    pay:string  
    text:string
  }[]
}
export default function Promoted({array,title,title2}:promotedInterface) {
  return (
    <div className='my-2'>
      {title && <h1 className='my-10 pl-2'>{title}</h1> }
      <div className='bg-white rounded-[4px] py-2 px-4 '>
      {title2 && <h1 className='py-5 border-b  text-lg'>{title2}</h1>}
      {array.map((item,key)=>{
        return (
          <div className='flex pr-2 md:pr-1 lg:pr-2 mb-6' key={key}>
            <div className='w-full'>
              <span className="text-sm font-semibold mb-4">{item.role}</span>
              <h1 className='text-sm text-grat-light-text'>{item.text}</h1>
            </div>
            <div>
              <div className='pl-2 md:pl-1 lg:pl-2  text-sm font-semibold mt-1'>{item.pay}</div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}
