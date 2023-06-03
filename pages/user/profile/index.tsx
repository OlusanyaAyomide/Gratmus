import ProfileDetail from '@/components/userProfile/ProfileDetail'
import ProfileView from '@/components/userProfile/ProfileView'
import Layout from '@/components/utils/Layout/Layout'
import React, { useState } from 'react'

export default function Profile() {
  const [page,setPage] = useState(1)
  return (
    <Layout>
      <div className='md:flex cont mt-8'>
        <div className={`${page===0?"":"hidden lg:block"} w-full lg:w-fit`}>
          <div className='max-w-[450px] lg:max-w-full mx-auto lg:w-[350px]'>
            <ProfileView/>
          </div>
        </div>
        <div className={`w-full ${page===1?"":"hidden lg:block"}`}>
          <div>
           <ProfileDetail/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
