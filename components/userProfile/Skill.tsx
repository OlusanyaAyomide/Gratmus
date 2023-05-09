import { ProfileSkillSet } from '@/utils/Homek'
import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'

export default function Skill() {
  const options =["All","Industry Knowledge","Tools And Technologies"]
  const [num,setNum] = useState(0)
  return (
    <div className='mt-8 light-border px-2'>
      <h1 className='text-lg font-semibold my-6'>Skills</h1>
      <div className='flex mb-4  sm:justify-start overflow-auto items-center'>
        {options.map((item,key)=>{
          return(
            <div key={key}>
              <button onClick={()=>{setNum(key)}} 
              className={`mr-8 transition-all duration-300 whitespace-nowrap rounded-xl text-sm py-1 px-3 ${num===key?"text-white bg-grat-green":""}`}>
                {item}
              </button>
            </div>    
          )
        })}
      </div>
      <div >
        {ProfileSkillSet.map((item,key)=>{
          return(
            <div className='mb-4 flex flex-wrap items-center' key={key}>
              <span className="text-grat-green text-base mr-2"><AiFillCheckCircle/></span>
              <span className='text-sm xs:text-base mb-1 mr-1 xs:mr-3'>{item.text}</span>
              <div className='flex items-center'>
              <button className='px-2 xs:px-3  py-1 items-center mr-5 flex whitespace-nowrap rounded-xl text-xs xs:text-sm bg-[#F6F1FDFF] text-[#863BE9FF]'>
                <span className='mr-2'><AiFillCheckCircle/></span>
                <span>{item.experience}</span>
              </button>
              {item.Endorsement  && <button className='px-2 items-center xs:px-3 flex  xs:text py-1 mr-4 whitespace-nowrap rounded-xl text-grat-orange text-xs xs:text-sm bg-[#FFF6F0FF]'>
                <span className='mr-2'><BsPeopleFill/></span>
                <span>{item.Endorsement} Endorsements</span>
              </button>}
              </div>
          
            </div>
          )
        })}
      </div>
    </div>
  )
}
