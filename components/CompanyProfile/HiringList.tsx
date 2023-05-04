import { JobList } from '@/utils/Homek'
import React from 'react'
import ListingHeader from './ListingHeader'
import GratImg from '../utils/GratImg'
import BidButon from '../utils/BidButon'

export default function HiringList() {
  return (
    <section className='cont relative mb-40'>
     {JobList.map((item,key)=>{
      return <div key={key} className='relative rounded-md border px-2 mb-16 md:px-4 py-8'>
        <ListingHeader {...item}/>
        <span className="block text-sm font-semibold mt-1 text-grat-light-text">Job title</span>
        <span className='block text-sm text-grat-light-text'>{item.jobTitle}</span>
        <span className="block text-sm md:text-base font-semibold mt-1 text-grat-light-text">Job Description</span>
        <div className='flex flex-wrap items-center'>
        <span className='block text-sm w-full md:w-7/12 lg:pr-12'>{item.jobDescription}</span>
        <div className='w-5/12 flex md:justify-end items-center mt-4  md:mt-0'>
          <span className='txt-sm text-grat-light-text mr-4 text-sm'>{item.followers} followers</span>
          <div className='flex items-center'>
            {item.persons.map((items,keys)=>{
              {return <div key={keys} className='flex items-center'>     
                {keys < 4 && <div  className={`${keys===0?"bg-grat-profile-green z-[28] -ml-[2px]":keys===1?"bg-[#FFD9BE] -ml-[4px] z-20":keys===2?"bg-[#F8C8F8] -ml-[6px] z-10":"bg-[#EAC6F8] -ml-[8px]"} h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] overflow-hidden rounded-full`} key={keys}><GratImg piority={true} src={items}/></div>}
                {keys=== 4 && <div className='h-[30px w-[30px] md:h-[36px] md:w-[36px] bg-grat-thick text-white flex items-center justify-center -z-10 rounded-full -ml-[10px]'>+9</div>}
              </div> }
            })}
          </div>
        </div>
        </div>
        <BidButon text='Learn More' className='block mt-6'/>
      </div>
      
     })}
    <button className='flex w-[60px] h-[60px] rounded-full text-white text-2xl bg-grat-green items-center justify-center font-semibold absolute right-0 lg:right-8 -bottom-10'>+</button>

    </section>
  )
}
