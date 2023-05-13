import React from 'react'
interface FollowButton{
    text:string
    className?:string
}
export default function FollowButton({text,className}:FollowButton) {
  return (
    <div>
       <div className={`flex ${className} whitespace-nowrap cursor-pointer h-[35px] items-center bg-grat-green px-3 text-white rounded-md `}>
        <div className='h-[14px] text-grat-green w-[14px] flex items-center justify-center bg-white rounded-sm'><span className='mb-[2px] ml-[1px] font-bold'>+</span></div>
        <span className='ml-2'>{text}</span>
       </div>
    </div>
  )
}
