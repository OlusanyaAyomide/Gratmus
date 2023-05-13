import GeneralInfo from '@/components/userProfile/edit/GeneralInfo'
import Information from '@/components/userProfile/edit/Information'
import BidButon from '@/components/utils/BidButon'
import Layout from '@/components/utils/Layout/Layout'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'


export default function EditProfile() {
  return (
   <Layout>
    <div className='cont'>
    <div className='flex justify-between items-center '>
      <h1 className='my-8 font-semibold text-lg xs:text-2xl lg:text-3xl flex items-center'>
          <span><BsArrowLeft/></span>
          <span  className='ml-1 md:ml-2'>Edit Profile</span>
      </h1>
      <div>
        <BidButon textStyle="text-grat-light-text" text='Cancel' className='border bg-white'/>
        <BidButon text='Save' className='ml-1 md:ml-2 mr-0'/>
      </div>
    </div>
    <div className='flex'>
      <div className='hidden lg:block w-[250px]'>  
        <Information/>
      </div>
      <div className='lg:ml-3 w-full'>
        <GeneralInfo/>
      </div>
    </div>
    </div>

   </Layout>
  )
}
