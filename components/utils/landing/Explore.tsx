import React, { useEffect, useRef, useState } from 'react'
import Inputfield from './Inputfield'
import GratImg from '../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import { ExploreArray } from '@/utils/landingK'



export default function Explore() {
  const ref = useRef<HTMLDivElement>(null)
  const [position,setPosition] = useState(0)

  const handleScroll=(add:boolean)=>{
    ref?.current?.scrollTo({left:add?position+260:position-260,behavior:"smooth"})
    setPosition((prev)=>{
      return add?prev+260:prev-260
    })
  }

  return (
    <section className='mt-16 cont'>
        <h1 className='section-header text-center mb-12'>Explore More <span className='text-grat-green'>New Connections</span></h1>
        <Inputfield/>
        <div className='flex items-center mt-16 my-8 justify-center'>
          <button disabled={position===0?true:false} onClick={()=>{handleScroll(false)}} className='h-[44px] w-[44px] mr-3'><GratImg src={landingExporter.ButtonLeft} /></button>
            <div className='flex overflow-auto w-[260px] sm:w-[520px] md:w-[780px] xl:w-[1040px] explore' ref={ref}>
              {ExploreArray.map((item,key)=>{
                return(
                  <div key={key} >
                    <div className={`${item.style} rounded-lg w-[240px] mx-[10px] py-8`} style={{backgroundColor:item.style}}>
                      <div className='mx-auto h-[64px] mb-3 w-[64px]'><GratImg src={item.image}/></div>
                      <h1 className='text-center text-grat-thick font-sarabun capitalize text-lg sm:text-xl font-[500px] mb-3'>{item.text}</h1>
                      <p className='font-[300] text-base text-center'>{item.number}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          <button disabled={position===1820?true:false}  onClick={()=>{handleScroll(true)}} className='h-[44px] w-[44px] ml-3'><GratImg src={landingExporter.ButtonRight}/></button>
        </div>
        <div>
          
        </div>
    </section>
  )
}
