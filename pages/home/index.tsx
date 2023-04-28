import React,{useState} from 'react'
import Layout from '@/components/utils/Layout/Layout'
import Profile from '@/components/home/profile/Profile'
import Feed from '@/components/home/Feed'
import Notification from '@/components/home/Notification'


export default function Home() {
  const [page,setPage] = useState(0)
  return (
    <Layout>
      <div className='bg-grat-light-gray flex lg:justify-between py-12 px-3 md:px-4 lg:px-6 '>
        <div className={`w-full md:flex-none md:w-[320px] ${page===0?"":page===1 ?"hidden md:block":"hidden lg:block"}`}>
          <Profile/>
        </div>
        {page === 2 && <div className='md:w-[280px] hidden md:block lg:hidden'>
          <Notification/></div>}
        <div className={`w-full md:w-fit md:flex-1 ${page===1?"":"hidden md:block"}`}>
          <Feed/>
        </div>
        <div className={`w-full md:w-[280px] md:flex-none ${page===2?"md:hidden lg:block":"hidden lg:block"}`}>
          <Notification/>
        </div>
      </div>
    </Layout>
  )
}
