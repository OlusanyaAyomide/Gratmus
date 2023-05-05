import Profile from '@/components/userProfile/Profile'
import Layout from '@/components/utils/Layout/Layout'
import React, { useState } from 'react'

export default function index() {
  const [page,setPage] = useState(0)
  return (
    <Layout>
      <div className='md:flex cont mt-8'>
        <div className={`${page===0?"":"hidden lg:block"} w-full lg:w-fit`}>
          <div className='max-w-[450px] lg:max-w-full mx-auto lg:w-[380px]'>
            <Profile/>
          </div>
        </div>
        <div className={`w-full ${page===1?"":"hidden lg:block"}`}>
          <div>
            Content
          </div>
        </div>
      </div>
    </Layout>
  )
}
