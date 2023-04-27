import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

import type { headerInterface } from './Header'

export interface SearchInterface{
    className?:string
    setHeaderState:React.Dispatch<React.SetStateAction<headerInterface>>
}

export default function BackButton({setHeaderState,className}:SearchInterface) {
  const handleChange = ()=>{
    setHeaderState((prev=>{
      return{...prev,isSearching:!prev.isSearching}
    }))
  }  
  return (
    <button className='flex items-center' onClick={handleChange}><span className={`${className?className:" text-3xl hidden lg:block xl:hidden mr-1 text-grat-black font-extrabold"}`}>{<BsArrowLeft/>}</span></button>
  )
}
