import React from 'react'
import { homeResource } from '@/public/home/homeExporter'
import GratImg from '../../GratImg'
import type { headerInterface } from './Header'

export interface SearchInterface{
    className?:string
    setHeaderState:React.Dispatch<React.SetStateAction<headerInterface>>
}


export default function SearchButton({className,setHeaderState}:SearchInterface){

  const handleToogle = ()=>{
    setHeaderState((prev=>{
      return{...prev,isSearching:true,isOverlay:true,navActive:false}
    }))
  }
  return (
    <div className={className}><button onClick={handleToogle}><GratImg src={homeResource.Search}/></button></div>
  )
}
