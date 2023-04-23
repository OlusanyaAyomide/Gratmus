import React from 'react'
import GratImg from './GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import { StaticImageData } from 'next/image'

interface sectionHeader{
  src?:StaticImageData
  text:string
  className?:string
  ptext?:string
  pstyle?:string,
  color?:string,

}

export default function SectionHeader({src,text,className="",ptext,pstyle="",color}:sectionHeader) {
  return (
    <>
    <div className={`flex justify-center flex-wrap items-center ${className}`}>
    {src && <div>
      <div className='w-[28px] h-[28px] md:w-[36px] md:h-[36px]' >
      <GratImg src={src}/>
      </div>
    </div>}
    <h1 className={`section-header ${color?"color":"text-grat-green"}`}>{text}</h1>
  </div>
  {ptext && <p className={`my-3 base-text text-center  ${pstyle}`}>{ptext}</p>}
    </>

  )
}
