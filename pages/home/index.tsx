import React,{useState} from 'react'
import Layout from '@/components/utils/Layout/Layout'
import Profile from '@/components/home/profile/Profile'
import Feed from '@/components/home/feed/Feed'
import Notification from '@/components/home/notification/Notification'
import { useAppSelector } from '@/hooks/reduxhooks'
import Togglers from '@/components/home/feed/Togglers'


export default function Home() {
  const {homePage:page} = useAppSelector((state=>state.layout))
  return (
    <Layout footer={false}>
      <Togglers/>
      <div className='bg-grat-light-gray flex lg:justify-between  px-3 md:px-4 lg:px-6 overflow-auto '>
        <div className={`w-full h-full overflow-x-hidden home-scroll overflow-auto md:flex-none md:w-[240px] lg:w-[300px] ${page===0?"":page===1 ?"hidden md:block":"hidden xl:block"}`}>
          <div className='fixed px-2 sm:px-4 md:px-0  md:w-[240px] lg:w-[300px]  h-screen overflow-auto home-scroll'>
           <Profile/>
          </div>
     
        </div>
        {page === 2 && <div className='md:w-[240px] overflow-x-hidden home-scroll h-full overflow-auto lg:w-[300px] md:flex-none hidden md:block xl:hidden'>
        <div className='fixed pb-6 md:w-[240px] lg:w-[300px]  h-screen overflow-auto home-scroll'>
           <Notification/>
          </div>
        </div>
          }
        <div className={`w-full h-full overflow-auto overflow-x-hidden  home-scroll ${page===1?"":"hidden md:block"}`}>
          <Feed/>
        </div>
        <div className={`w-full h-full overflow-auto overflow-x-hidden home-scroll md:w-[240px] lg:w-[300px] md:flex-none ${page===2?"md:hidden xl:block":"hidden xl:block"}`}>
        <div className='fixed md:w-[240px] pb-6 lg:w-[300px]  h-screen overflow-auto home-scroll'>
           <Notification/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
