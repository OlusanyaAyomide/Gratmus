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

}

export default function CenterDiv({isSearching,setHeaderState}:centerDivInterface) {
  const router = useRouter()
  return (
    <div className='h-full w-fit flex-1 justify-around hidden md:flex px-6 md:px-2 item-center relative top-4 xl:top-6'>
    {NavLinks.map((item,key)=>{
      const isActive = router.asPath === item.link
      console.log(router.asPath)
      return(
       <Link href={item.link} key={key} className={`${isSearching?"lg:hidden xl:block":"block"}`}>
        <button className={`h-[32px] w-[32px] relative ${isActive?"my-underline":""}`}><GratImg src={item.image}/></button>
       </Link>
      )
      
    })}
      <span className='hidden md:block lg:hidden'><ToggleButton md={true}/></span>
      {!isSearching && <SearchButton setHeaderState={setHeaderState} className='hidden lg:block xl:hidden h-[32px] -mr-2 w-[32px]'/>}
    {isSearching && <div className='hidden lg:flex xl:hidden -top-4 items-center relative'>
      <BackButton setHeaderState={setHeaderState}/>
      <div className='w-[450px]'><InputField/></div>
    </div>}
  </div>
  )
}
