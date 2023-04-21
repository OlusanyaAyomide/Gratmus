import React from 'react'
import GratImg from '../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import { footerLinks } from '@/utils/landingK'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className=' mt-16 pt-24 pb-8 bg-grat-black'>
      <div className='cont flex flex-wrap'>
      <div className='flex items-center md:justify-center h-full w-full lg:w-[24%]'>
        <div className=' w-[110px] h-[36.9px]  md:h-[44px] md:w-[133px]'>
          <GratImg className='w-full h-full' src={landingExporter.Logo}/>
        </div>
      </div>
      <div className='flex flex-wrap w-full lg:w-[76%] justify-between'>
        {footerLinks.map((item,key)=>{
          return(
            <div className=' mt-12 lg:mt-0 w-6/12 md:w-3/12' key={key}>
              <h1 className='mb-2 text-lg font-sarabun font-[500] text-grat-white'>{item.header}</h1>
              {item.content.map((items,keys)=>{
                return(
                  <span key={keys} className='base-text block my-1 text-grat-white'><Link href={items.link}>{items.text}</Link></span>
                )
              })}
            </div>
          )
        })}
      </div>

    </div>
    <span className="block base-text mt-12 mb-2 text-grat-white text-center">
      &copy; 2023 by Gratmus Digital Service
    </span>
    </div>

  )
}
