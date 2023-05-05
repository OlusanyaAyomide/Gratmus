import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { Notifications } from '@/utils/Homek'
import React from 'react'
import {AiFillCheckSquare} from "react-icons/ai"


export default function MostViewed({onFixed=false}:{onFixed?:boolean}) {
  return (
    <div className={` bg-white rounded-[4px]  px-4 relative  ${onFixed?"pt-4 pb-2":"py-6"}`}>
      <div className='flex items-center'>
        <h1 className='text-lg w-full '>Most Viewed People</h1>
        <div>
          <button className='h-[22px] w-[2xpx]'>
            <GratImg src={homeResource.More}/>
          </button>
        </div>
      </div>

      <div className='mt-12'>
        {Notifications.viewedPeople.map((item,key)=>{
          return(
            <div className='mb-8 flex items-center' key={key}>
              <div className='w-full flex items-center'>
                <div>
                  <div className='h-11 w-11 md:w-10 md:h-10 lg:h-11 lg:w-11 rounded-full overflow-hidden bg-grat-profile-green'>
                    <GratImg src={item.image}/>
                  </div>
                </div>
              <div className='ml-3'>
                <h1 className='text-sm'>{item.name}</h1>
                <h1 className='text-grat-light-text mb-1 text-sm'>{item.job}</h1>
              </div>
              </div>
              <div>
                {item.circle && <div className='h-[14px] w-[14px] rounded-full bg-white border border-grat-green flex items-center justify-center'>
                  <div className='bg-grat-green h-[10px] w-[10px] rounded-full border-[2px] border-white'></div>
                </div>}
                {!item.circle && <div className='h-[16px] rounded-sm bg-grat-green w-[16px] flex items-center justify-center'>
                  <span className='text-sm text-white'><AiFillCheckSquare/></span>
                  </div>}
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex  mt-6 justify-center'>
        <button className='text-sm text-[#E66359FF]'>View More</button>
      </div>
    </div>
  )
}
