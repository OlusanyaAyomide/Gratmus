import React from 'react'
import { StaticImageData } from 'next/image';
import GratImg from '../utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { CompanyExporter } from '@/public/company/CompanyExporter'
import {AiOutlineShareAlt} from "react-icons/ai"
import FollowButton from '../utils/FollowButton'
import BidButon from '../utils/BidButon'


interface ListInterface{
    name: string;
    jobTitle: string;
    jobDescription: string;
    followers: number;
    isVerified: boolean;
    persons: StaticImageData[];
}

export default function ListingHeader(item:ListInterface) {
  return (
    <div className='flex justify-between'>
    <div className="flex items-center">
      <div className='flex items-center'>
        <span className='font-sarabun font-semibold text-base sm:text-lg'>{item.name}</span>
          {item.isVerified && <GratImg className='mt-[1px] ml-2 h-[18px] w-[18px]' src={homeResource.CheckMark}/>}
          {item.isVerified && <GratImg className='mt-[1px] h-[18px] w-[18px]' src={CompanyExporter.Medal}/>}
        <BidButon text='Apply Now' className='ml-2'/>
        </div>
      </div>
      <div className='flex items-center'>
          <button><span className='md:hidden text-grat-green text-2xl'><AiOutlineShareAlt/></span></button>
          <div className='cursor-pointer md:hidden ml-3 text h-[14px] bg-grat-green w-[14px] flex items-center justify-center text-white rounded-sm'><span className='mb-[2px] ml-[1px] font-bold'>+</span></div>
          <div className='pointer-cursor hidden md:flex rounded-[4px]  bg-[#C8FBF6FF]  -nowrap py-[6px] px-3 items-center mt-[1px]'>
              <span className='text-grat-green text-xl'><AiOutlineShareAlt/></span>
              <span className='ml-1  text-grat-green '>Share</span>
          </div>
          <FollowButton text='Follow' className='ml-4 hidden md:flex'/>
        </div>
    </div>
  )
}
