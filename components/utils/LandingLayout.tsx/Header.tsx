import React, { useState } from 'react'
import GratImg from '../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import { navLinks } from '@/utils/landingK'
import GratButton from '../GratButton'
import ToggleButton from '../NavButton'
import LandingMenu from '../landing/LandingMenu'
import Link from 'next/link'

export default function Header() {

  const [navActive,setNavActive] = useState(false)
  const handleClick = ()=>{
    setNavActive((prev=>!prev))
  }
  return (
    <div className='cont flex items-center py-1 relative '>
      <div className='flex items-center'>
          <div className='h-full py-1 relative before:absolute before:bg-grat-gray before:w-[2px] before:-top-4 before:h-[150%] before:right-0 pr-6'>
              <div className='w-[110px] h-[36.9px] md:w-[133px] md:h-[44px]'>
              <GratImg src={landingExporter.Logo} className='h-full w-full'/>
              </div>
        
          </div>
          <div className='hidden md:flex pl-8'>
              {navLinks.map((item,key)=>{
                  return(
                      <button key={key} className='mx-4'>
                          <GratImg src={item.image} className=' h-[48px] w-[48px] lg:h-[54px] mx-auto lg:w-[54px] block  '/>
                          <span className="block font-[600] -mt-2 text-grat-black text-lg text-center">{item.name}</span>
                      </button>
                  )
              })}
          </div>
      </div>
      <div className='flex w-full  justify-end items-center'>
        <Link href={"/signup"}><button className=' hidden lg:block pr-3 border-r-2 py-2 text-lg border-grat-gray text-grat-green font-[500] transition-all duration-300 active:text-white active:bg-grat-green'>Join now</button>
        </Link>
            <GratButton text='Sign in' className='ml-4 hidden xs:block' />
            <ToggleButton isActive={navActive} onClick={handleClick}/>
        </div>
        {navActive && <LandingMenu/>}
    </div>
  )
}
