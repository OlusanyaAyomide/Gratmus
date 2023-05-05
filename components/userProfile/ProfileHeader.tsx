import React from 'react'
import GratImg from '../utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'

export default function ProfileHeader() {
  const tags =["Ux Research", "UI Design"," WebDesign"]
  return (
    <section>
      <div className='h-[120px] relative bg-[#ECFDFC]'>
        <div className='absolute h-[60px] w-[60px] rounded-full -top-[30px] -left-[30px] bg-grat-profile-green'></div> 
      </div>
      <div className='-mt-[65px] relative z-20 w-[100px] mx-auto'>
          <div className='sm:h-[100px] w-[100px] rounded-full overflow-hidden bg-grat-profile-green'><GratImg src={homeResource.Person2}/></div>
          <span className="profile-text whitespace-nowrap text-grat-green mt-2">john Smith</span>
          <span className="base-text font-semibold block mt-1 text-center">Ui/UX Designer</span>
      </div>
      <p className='text-grat-light-text text-center mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam placeat possimus accusantium.</p>
      <div className='flex flex-wrap mt-6 mx-4 justify-center border-b border-grat-gray pb-3'>
        {tags.map((item,key)=>{
          return(
            <button key={key} className='py-[2px] whitespace-nowrap ml-[4px] mb-2 text-sm px-[6px] bg-grat-gray rounded-[6px]'>{item}</button>
          )
        })}
      </div>
    </section>

  )
}
