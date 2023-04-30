import React,{useState} from 'react'
import Layout from '@/components/utils/Layout/Layout'
import Profile from '@/components/home/profile/Profile'
import Feed from '@/components/home/feed/Feed'
import Notification from '@/components/home/Notification'


export default function Home() {
  const [page,setPage] = useState(1)
  return (
    <Layout>
      <div className='bg-grat-light-gray flex lg:justify-between py-12 px-3 md:px-4 lg:px-6 '>
        <div className={`w-full md:flex-none md:w-[260px] lg:w-[300px] ${page===0?"":page===1 ?"hidden md:block":"hidden lg:block"}`}>
          <Profile/>
        </div>
        {page === 2 && <div className='md:w-[280px] hidden md:block xl:hidden'>
          <Notification/></div>}
        <div className={`w-full    ${page===1?"":"hidden md:block"}`}>
          <Feed/>
        </div>
        <div className={`w-full md:w-[280px] md:flex-none ${page===2?"md:hidden xl:block":"hidden xl:block"}`}>
          <Notification/>
        </div>
      </div>
    </Layout>
  )
}
