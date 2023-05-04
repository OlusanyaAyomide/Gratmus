import GratButton from '@/components/utils/GratButton'
import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { profileGuide, profileList } from '@/utils/Homek'
import { profile } from 'console'
import Link from 'next/link'
import React from 'react'
import Suggestions from './Suggestions'

export default function Profile() {
  return (
    <div className='pt-12'>
      <section className='px-1 pb-1 py-24 bg-grat-green rounded-[4px]'>
      <div className='bg-white my-[2px] rounded-[4px] pb-4'>
        <div className='relative overflow-hidden bottom-[63.75px] h-[127.5px] w-[127.5px] mx-auto bg-grat-profile-green rounded-full'>
          <GratImg src={homeResource.Person2}/>
        </div>
        <span className=" block text-xl -mt-[48.75px] text-center md:text-2xl font-semibold text-grat-black font-sarabun">John Smith</span>
        <span className="base-text block mt-1 text-center text-grat-light-text">Graphic Designer at Self Employed</span>
      </div>
      <div className='my-[2px] rounded-sm py-2 bg-white px-2 sm:px-6 md:px-2'>
        <div className='flex justify-between'>
          <div>
            <span className="base-text text-lg font-sarabun m">Followers</span>
            <span className="block text-center base-text">34</span>
          </div>
          <div>
            <span className="base-text text-lg font-sarabun ">Following</span>
            <span className="block text-center base-text">117</span>
          </div>
        </div>
        <div className='flex flex-wrap justify-between w-full'>
              {profileList.map((item,key)=>{
                return(
                  <div className={`w-6/12 bg-red flex my-1 ${key%2===0?"":"justify-end"}`} key={key}>
                    <Link href={"/home"}><span className={`text-xs underline text-grat-green`}>{item}</span></Link>
          
                  </div>
                )
              })}
            </div>
      </div>
      <Link href={"/home"}><GratButton text='View your Profile' type={2} className='block mt-8 rounded-md py-[8px] w-full'/></Link>

      <div> 
      </div>
    </section>
    <Suggestions/>
    <div className='w-fit mx-auto mt-12'>
        <span className="base-text block my-1">{profileGuide.first}</span>
        <span className="base-text block my-1">{profileGuide.second}</span>
        <span className="base-text block my-1">{profileGuide.third}</span>
        <div className='mt-16 flex justify-between'>
          <span className='text-[#E66359FF] base-text'>W Workwise</span>
          <span className='base-text'>@Copyright 2019</span>
          
        </div>
    </div>
              
  </div>
    
  )
}
