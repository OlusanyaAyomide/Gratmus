import React from 'react'
import Inputfield from './Inputfield'
import GratImg from '../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import { ExploreArray } from '@/utils/landingK'


export default function Explore() {
  return (
    <section className='mt-16 cont'>
        <h1 className='section-header text-center mb-12'>Explore More <span className='text-grat-green'>New Connections</span></h1>
        <Inputfield/>
        <div className='flex items-center mt-16 justify-center'>
          <button className='h-[44px] w-[44px] mr-3'><GratImg src={landingExporter.ButtonLeft}/></button>
            <div className='flex overflow-auto w-[260px] sm:w-[520px] md:w-[780px] xl:w-[1040px]'>
              {ExploreArray.map((item,key)=>{
                return(
                  <div key={key}>
                    <div className={`${item.style} rounded-lg w-[240px] mx-[10px] py-8`} style={{backgroundColor:item.style}}>
                      <div className='mx-auto h-[64px] mb-3 w-[64px]'><GratImg src={item.image}/></div>
                      <h1 className='text-center text-grat-thick font-sarabun capitalize text-lg sm:text-xl font-[500px] mb-3'>{item.text}</h1>
                      <p className='font-[300] text-base text-center'>{item.number}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          <button className='h-[44px] w-[44px] ml-3'><GratImg src={landingExporter.ButtonRight}/></button>
        </div>
        <div>
          
        </div>
    </section>
  )
}
