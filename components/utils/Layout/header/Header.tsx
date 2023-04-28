import React,{useState} from 'react'
import GratImg from '../../GratImg'
import { landingExporter } from '@/public/landing/image/landingExporter'
import InputField from './InputField'
// import {BsArrowLeft} from "react-icons/bs"
import ToggleButton from '../../NavButton'
import { homeResource } from '@/public/home/homeExporter'
import CenterDiv from './CenterDiv'
import SearchButton from './SearchButton'
import BackButton from './BackButton'
import SideBar from './SideBar'


export interface headerInterface{
  isSearching:boolean,
  navActive:boolean,
  isOverlay:boolean
}
const initialState={
  isSearching:false,
  navActive:false,
  isOverlay:false
}

export default function Header(){

  const [headerState,setHeaderState] = useState<headerInterface>(initialState)
  const handleClick = ()=>{
    setHeaderState((prev=>{return{...prev,
      navActive:!prev.navActive,isSearching:false,isOverlay:prev.navActive?false:true
    }}))
  }
  return (
    <>
      {headerState.isOverlay && <div className={`z-30 xl:hidden my-filter fixed -inset-1 my-blur w-[120%] h-full bg-black/60 ${headerState.navActive?"lg:hidden":""}`}></div>}
     <div className='flex items-center lg:justify-between relative z-40 bg-white'>
      {headerState.navActive && <SideBar/>}
      <div className='flex pl-3 sm:pl-3 md:pl-4 lg:pl-6 pr-3 w-full md:w-fit  justify-between'>
        <div>
          <div className={`flex-0 w-[110px] h-[36.9px] md:w-[133px] md:h-[43px] ${headerState.isSearching?"hidden md:block":""}`}>
          <GratImg src={landingExporter.Logo} piority={true}/>
          </div> 
        </div> 
        {headerState.isSearching && <div className="md:hidden ml-2 w-full flex items-center">
          <BackButton setHeaderState={setHeaderState} className='text-3xl md:hidden mr-1 text-grat-black font-extrabold'/>
          <InputField/>
        </div>}
        <div className='hidden md:block w-full lg:hidden xl:block'>
          <InputField/>
        </div>
       <div className='flex items-center'>
        {!headerState.isSearching && <SearchButton setHeaderState={setHeaderState} className='md:hidden h-[32px] -mr-2 w-[32px]'/>}
        <span className={`${headerState.isSearching?"hidden mr-2 sm:block":""}`}><ToggleButton isActive={headerState.navActive} onClick={handleClick}/></span>
        </div>
      </div>
      <CenterDiv isActive={headerState.navActive} onClick={handleClick} isSearching={headerState.isSearching} setHeaderState={setHeaderState}/>
      <div className='bg-[#DEE1E6FF]  py-1  pr-2 sm:pr-3 md:pr-4 lg:pr-6 h-[80px] hidden lg:flex items-center justify-between'>
          <div className="flex px-4 pr-2 border-l">
           <button className='h-[32px] w-[32px] mx-4'>{<GratImg src={homeResource.Circles}/>}</button>
           <button className='h-[32px] w-[32px] mx-4'>{<GratImg src={homeResource.Chat}/>}</button>
           <button className='h-[32px] w-[32px] mx-4'>{<GratImg src={homeResource.Notification}/>}</button>
          </div>
          <div className='flex items-center ml-2'>
            <div>
            <div className='h-[32px] mr-1 w-[32px] border border-grat-green rounded-full bg-green-200'></div>
            </div>

            <span className='font-semibold base-text text-sm '>John Smith</span>
            <div className='ml-2 h-[16px] w-[16px]'><GratImg src={homeResource.Dropdown}/></div>
          </div>
      </div>
    </div>
    </>

  )
}
