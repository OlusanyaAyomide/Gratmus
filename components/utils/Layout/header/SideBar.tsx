import React,{useState} from 'react'
import GratImg from '../../GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'
import { NavLinks, ProfileContents } from '@/utils/Homek'
import Animator from '../../Animator'

export default function SideBar() {
  const [isToggled,setIsToggled] = useState(false)
  return (
    <Animator x={-400} duration={0.3} exit={true} className='fixed top-[44.2px] sm:top-[53px] left-0 h-screen lg:hidden w-10/12 max-w-[350px] bg-white -z-10 px-4'>
      <div className=' relative z-20'>
      <div className='bg-grat-profile-green mt-4 rounded-full overflow-hidden  w-fit'>
        <Link href={"/user/profile"}><GratImg src={homeResource.Person2} className='h-[60px] w-[60px] sm:h-[65px] sm:w-[65px]'/></Link>
      </div>
      <div className='mt-1 flex items-center justify-between'>
            <Link href={"/user/profile"}><p className='text-sm text-grat-light-text font-semibold'>John Smith</p></Link>
           <button className={`${isToggled?"rotate-[180deg] ":""} p-1 ml-3 transition-all duration-300`} onClick={()=>{setIsToggled((prev=>!prev))}}>
              <span className={`text-lg   ${isToggled?"":""} text-grat-black`}><FaAngleDown/></span>
           </button>
         </div>
      </div>
      <div>
    
         {isToggled && <Animator y={-100} duration={0.25} className='mt-2 pb-1 border-b  border-grat-light-text'>
            {ProfileContents.map((item,key)=>{
              return(
                <div className='flex mb-3 items-center' key={key}>
                  <div className='h-[25px] w-[25px]'><GratImg src={item.image}/></div>
                  <Link href={"/"}><span className='ml-2 text-sm font-sarabun '>{item.text}</span></Link> 
                </div>
              )
            })}
         </Animator>}
         <div className={`pt-3  ${isToggled?"":"border-t mt-4  border-grat-light-text"}`}>
            {NavLinks.map((item,key)=>{
              return(
                <div key={key} className='flex mb-3 items-center'>
                    <div className='h-[25px] w-[25px]'><GratImg src={item.image}/></div>
                    <Link href={item.link}><span className='ml-2 text-sm font-sarabun '>{item.name}</span></Link> 
                </div>
              )
            })}
         </div>
        </div>
    </Animator>

  )
}
