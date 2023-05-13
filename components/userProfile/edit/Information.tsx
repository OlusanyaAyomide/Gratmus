import React from 'react'
import { layOutActions } from '@/store/layoutSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxhooks'
import GratImg from '@/components/utils/GratImg'
import { CompanyExporter } from '@/public/company/CompanyExporter'
import StartedSection from '@/components/utils/StartedSection'
export default function Information() {
  const dispatch = useAppDispatch()
  const {profileToggle:{
    about,information,experience,skills,education
  }} = useAppSelector((state=>state.layout))
  return (
    <div>
        <div>
        <button  onClick={()=>{
          dispatch(layOutActions.setProfilePage({section:"information"}))
        }} className={`my-1 text-grat-thick2 w-full text-left py-2 font-semibold px-2 block  rounded-md text-base ${information?"text-grat-green bg-[#C8FBF6FF]":""}`}>
          General Information
        </button>

        <button onClick={()=>{
          dispatch(layOutActions.setProfilePage({section:"about"}))
        }} className={`my-1 py-2 w-full text-grat-thick2 text-left block font-semibold px-2 rounded-md text-base ${about?"text-grat-green bg-[#C8FBF6FF]":""}`}>
          About
        </button>

        <button onClick={()=>{
          dispatch(layOutActions.setProfilePage({section:"experience"}))
        }} className={`my-1 px-2 block text-grat-thick2 w-full text-left  py-2 font-semibold rounded-md text-base ${experience?"text-grat-green bg-[#C8FBF6FF]":""}`}>
         Working Experience
        </button>


        <button onClick={()=>{
          dispatch(layOutActions.setProfilePage({section:"skills"}))
        }} className={`my-1 px-2 block text-grat-thick2 w-full text-left py-2 font-semibold rounded-md text-base ${skills?"text-grat-green bg-[#C8FBF6FF]":""}`}>
         Skills
        </button>

        <button onClick={()=>{
          dispatch(layOutActions.setProfilePage({section:"education"}))
        }} className={`my-1 px-2 block  text-grat-thick2 w-full text-left py-2 font-semibold rounded-md text-base ${education?"text-grat-green bg-[#C8FBF6FF]":""}`}>
         Education
      </button>
      </div>
      <div className='bg-[#FFF6F0FF] py-4 mt-6 rounded-lg px-2'>
        <div className='mx-auto w-[143px] h-[183px]'>
        <GratImg src={CompanyExporter.EditImage}/>
        </div>
        <StartedSection headerText='Tips to build an outstanding profile' ptext='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' pstyle='text-center text-sm' buttonText='Learn More'/>
      </div>
    </div>
  
  )
}
