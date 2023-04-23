import React from 'react'
import SectionHeader from '../SectionHeader'
import { Discussoptions } from '@/utils/landingK'
import Link from 'next/link'
import GratImg from '../GratImg'
import GratButton from '../GratButton'

export default function Discuss() {
  return (
    <section className='cont mt-12'>
        <SectionHeader text='DICUSS MORE' ptext='Disuss with more People' pstyle='mt-3 mb-5'/>
        <div className='flex flex-wrap justify-center mt-4'>
            {Discussoptions.map((item,key)=>{
                return(
                    <div key={key} className="mx-2 mb-6">
                        <Link href={item.link}>
                            <button className='w-[276px] h-[222px] rounded-[4px] flex flex-col justify-center bg-grat-light'>
                                <div className='mx-auto w-[60px] h-[60px]'>
                                    <GratImg src={item.icon}/>
                                </div>
                                <span className='my-2 block w-full text-center font-sarabun uppercase text-base sm:text-lg'>{item.text}</span>
                                <div className='flex justify-center w-full'>
                                    <h1 className='uppercase font-sarabun py-[2px] pr-[11px] border-r border-grat-gray text-grat-green'>{item.desc1}</h1>
                                    <h1 className='uppercase font-sarabun pl-3'>{item.desc1}</h1>
                                </div>
                            </button>
                        </Link>
                    </div>
                
                )
            })}
        </div>
        <Link href={"/"}><GratButton text='Join now' className='mx-auto block mt-4'/></Link>
    </section>
  )
}
