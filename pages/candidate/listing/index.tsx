import GetStarted from '@/components/CandidateListing/GetStarted'
import Results from '@/components/CandidateListing/Results'
import Seachby from '@/components/CandidateListing/Seachby'
import Layout from '@/components/utils/Layout/Layout'
import React from 'react'

export default function index() {
  return (
    <Layout>
      <Seachby/>
      <div className='lg:flex mt-16'>
        <div className='w-full cont'>
          <Results/>
        </div>
        <div className='hidden lg:block'>
          <div className='w-[330px]'>
            <GetStarted/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
