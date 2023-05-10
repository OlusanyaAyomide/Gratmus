import React from 'react'
import GratImg from '../utils/GratImg'
import { CompanyExporter } from '@/public/company/CompanyExporter'
import StartedSection from '../utils/StartedSection'

export default function GetStarted() {
  return (
    <div className='bg-[#FFF6F0FF] py-6 px-4 mt-[72px]'>
      <div className='h-[395px] w-[345px'>
        <GratImg src={CompanyExporter.GetStarted} piority={true}/>
      </div>
      <StartedSection className='-mt-8' headerText='Want Potential Candidate' pstyle='leading-[32px] text-center' ptext='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi!' buttonText='Start browsing'/>
    </div>
  )
}
