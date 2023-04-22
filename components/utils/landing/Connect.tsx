import React from 'react'
import SectionHeader from '../sectionHeader'
import { landingExporter } from '@/public/landing/image/landingExporter'
import { Typography } from '@/utils/landingK'
import GratButton from '../GratButton'
import Link from 'next/link'

export default function Connect() {
  const style ="text-xs sm:text-sm lg:text-base xl:text-lg my-3 font-roboto text-grat-black uppercase"
  return (
    <section className='mt-20 cont'>
      <SectionHeader src={landingExporter.Triple} text='Connect With People' ptext='Connect with people and explore' pstyle='my-5'/>
      <div>
        <p className={`${style}`}>{Typography.connectTextsm}</p>
        <p className="block massive-text  lg:text-[67px]">{Typography.connectText}</p>
        <p className={`${style} text-right`}>{Typography.connectTextsm}</p>
      </div>
      <div className='mt-12 flex justify-center'>
        <Link href={"/"}><GratButton text='Connect now'/></Link>
      </div>
    </section>
  )
}
