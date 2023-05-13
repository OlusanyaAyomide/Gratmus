import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import InfoHeader from './InfoHeader'
import InfoContent from './InfoContent'
import { useAppSelector } from '@/hooks/reduxhooks'

export default function GeneralInfo() {
  const {profileToggle:{information}} = useAppSelector((state=>state.layout))
  return (
  <div className={`mt-3 light-border ${information?"py-4":"py-4"} px-2 sm:px-4 md:px-6`} >
    <InfoHeader/>
    {information && <InfoContent/>}
  </div>
  )
}
