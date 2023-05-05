import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { suggestionList } from '@/utils/Homek'
import React from 'react'

export default function Suggestions({onFixed=false}:{onFixed?:boolean}) {
  return (
    <div className={`px-2 sm:px-6  bg-white mt-12 mb-4 rounded-[4px] ${onFixed?"py-4":"py-10"}`}>
      <div className='flex justify-between'>
      <span className='block mt-2 text-lg '>Suggestions</span>
      <button>
      <GratImg src={homeResource.More} className='h-[30px] w-[21px]'/>
      </button>
      </div>
      <div className='mt-4'>
        {suggestionList.map((item,key)=>{
          return(
            <div className='my-6 flex items-center' key={key}>
              <div className='w-[44px] flex-none h-[44px] rounded-full bg-grat-profile-green overflow-hidden'>
                <GratImg src={item.image}/>
              </div>
              <div className='flex-1 pl-1'>
                <span className='base-text block font-semibold'>{item.name}</span>
                <span className='text-grat-light-text block '>{item.job}</span>
              </div>
              {!item.added && <button className='flex-none h-[41px] w-[42px]'><GratImg src={homeResource.Add}/></button>}
              {item.added && <button className='shadow-xs w-[32px] h-[32px] flex items-center shadow justify-center shadow-[#171a1f] rounded-[4px]'>P</button>}
            </div>
          )
        })}
      </div>
      <button className="block mt-8 mx-auto text-[#E66359FF]">View More</button>
</div>
  )
}
