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
      <div className='bg-grat-light-gray flex lg:justify-between  px-3 md:px-4 lg:px-6 h-[106vh] overflow-auto '>
        <div className={`w-full h-full overflow-x-hidden home-scroll overflow-auto md:flex-none md:w-[260px] lg:w-[300px] ${page===0?"":page===1 ?"hidden md:block":"hidden xl:block"}`}>
          <Profile/>
        </div>
        {page === 2 && <div className='md:w-[270px] overflow-x-hidden home-scroll h-full overflow-auto lg:w-[300px] md:flex-none hidden md:block xl:hidden'>
          <Notification/></div>}
        <div className={`w-full h-full overflow-auto overflow-x-hidden  home-scroll ${page===1?"":"hidden md:block"}`}>
          <Feed/>
        </div>
        <div className={`w-full h-full overflow-auto overflow-x-hidden home-scroll md:w-[260px] lg:w-[300px] md:flex-none ${page===2?"md:hidden xl:block":"hidden xl:block"}`}>
          <Notification/>
        </div>
      </div>
    </Layout>
  )
}
