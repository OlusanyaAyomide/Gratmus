import { canditatListings } from '@/utils/Candidatesk'
import React from 'react'
import GratImg from '../utils/GratImg'
import { FaAddressCard, FaShoppingBag, FaWhatsapp } from 'react-icons/fa'
import BidButon from '../utils/BidButon'
import StartedSection from '../utils/StartedSection'

export default function Results() {
  return (
    <div>
      <h1 className='font-semibold text-sm md:text-base'>32 results for <span className='text-grat-green'>'Designers'</span></h1>
      <div>
        {canditatListings.map((item,key)=>{
          return(
            <div key={key} className='flex my-12 px-2 sm:px-4 light-border py-4'>
              <div>
                <div className='h-[48px] w-[48px] rounded-full bg-grat-profile-green sm:h-[65px] sm:w-[65px] overflow-hidden'>
                  <GratImg src={item.image}/>
                </div>
              </div>
              <div className='pl-1 xs:pl-2 sm:pl-3 w-full'>
                <div className='flex mb-2 items-center  justify-between'>
                  <div className='flex md:items-center flex-wrap'>
                  <h1 className='text-base sm:text-lg font-semibold'>{item.name}</h1>  
                  {item.openforwork && <div className='border sm:ml-3 text-[#863BE9FF] border-[#863BE9FF] flex items-center py-[3px] px-2 rounded-xl text-sm'>
                    <span className='mr-1'><FaShoppingBag/></span>
                    <span>Open for work</span>
                  </div>}
                  </div>
                  <div className='flex'>
                    <button className='hidden mr-2 md:block bg-[#C8FBF6FF] rounded-[4px] text-grat-green px-2 h-[29px] mt-[3px] text-sm'>Send Message</button>
                    <BidButon className='hidden md:block' text='Connect'/>
                    <button className='text-xl mr-2 text-grat-green  md:hidden'><FaWhatsapp/></button>
                    <button className='text-xl mr-2 text-grat-green  md:hidden'><FaAddressCard/></button>
                  </div>
                </div>
                <div className='flex my-[2px] flex-wrap'>
                  <div className='pr-2 text-sm sm:pr-6 border-r-2 border-grat-light-text/20'>{item.location}</div>
                  <div className=' sm:ml-6 text-sm'>{item.job}</div>
                </div>
                <span className="block mb-2  text-sm">{item.experience} of Experience</span>
                <div className='my-1 flex flex-wrap -ml-2'>
                  {item.roles.map((item,key)=>{
                    return(
                      <button key={key} className='py-1 whitespace-nowrap ml-[4px] mb-2 text-sm px-[6px] bg-grat-light-gray rounded-[6px]'>{item}</button>
                    )
                  })}
                </div>
              </div>

            </div>
          )
        })}
      </div>
      <StartedSection className='mt-6 lg:hidden mx-auto max-w-[300px]' headerText='Want Potential Candidate' pstyle='leading-[32px] text-center' ptext='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi!' buttonText='Start browsing'/>
    </div>
  )
}
