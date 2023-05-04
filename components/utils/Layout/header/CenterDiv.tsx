import React from 'react'
import { NavLinks } from '@/utils/Homek'
import { useRouter } from 'next/router'
import ToggleButton from '../../NavButton'
import Link from 'next/link'
import type { headerInterface } from './Header'
import InputField from './InputField'
import GratImg from '../../GratImg'
import { BsArrowLeft } from 'react-icons/bs'
import SearchButton from './SearchButton'
import BackButton from './BackButton'

export interface centerDivInterface{
  isSearching:boolean
  setHeaderState:React.Dispatch<React.SetStateAction<headerInterface>>
  isActive:boolean
  onClick:()=>void
}

export default function CenterDiv({isSearching,setHeaderState,isActive,onClick}:centerDivInterface) {
  const router = useRouter()
  return (
    <div className='h-full mt-[12px]  w-fit flex-1 justify-around hidden md:flex px-6 md:px-2 lg:px-16 xl:px-12 item-center relative'>
    {NavLinks.map((item,key)=>{
      const isActive = router.asPath === item.link

      return(
       <Link href={item.link} key={key} className={`${isSearching?"lg:hidden  xl:block":"block"}`}>
        <div className={`${isActive?"my-underline relative top-2":""} transition-all duration-300`}>
        <button className={`h-[26px] w-[26px] relative `}><GratImg src={item.image}/>
        <p className={`text-xs text-center mt-[0.5px] ${isActive?"font-semibold":""}`}>{item.name}</p>
        </button>
        </div>
        
       </Link>
      )
      
    })}
      <span className='hidden md:block lg:hidden'><ToggleButton isActive={isActive} onClick={onClick} md={true}/></span>
      {!isSearching && <SearchButton setHeaderState={setHeaderState} className='hidden lg:block xl:hidden h-[28px] -mr-2 w-[28px]'/>}
    {isSearching && <div className='hidden  lg:flex xl:hidden  items-center relative'>
      <BackButton setHeaderState={setHeaderState}/>
      <div className='w-[450px] '><InputField/></div>
    </div>}
  </div>
  )
}
