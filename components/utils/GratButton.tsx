import { useRouter } from 'next/router'
import React from 'react'

interface buttonInterface{
    text:string
    type?:number
    className?:string
    onClick?:()=>void
}

export default function GratButton({text,type=1,className,onClick}:buttonInterface) {
  const router = useRouter()
  const navigate = ()=>{
    router.push("/signup")
  }
  if (type ===1){
    return (
      <button onClick={onClick?onClick:navigate} className={`bg-grat-green rounded-[25px] px-10 py-2 sm:px-12 sm:py-3 text-white ${className} active:bg-grat-green whitespace-nowrap active:text-white transition-all duration-300  hover:text-grat-green hover:bg-white sm:hover:px-[47px] hover:border hover:border-grat-green `}>
        {text}
      </button>
    )
  }  
  return(
      <button  onClick={onClick?onClick:navigate} className={`bg-white  border-grat-green border-2 rounded-[26px]  hover:border-white text-grat-green hover:text-white hover:bg-grat-green active:border-grat-green active:text-grat-green active:bg-white  whitespace-nowrap transition-all duration-300 ${className?className:"px-[38px] sm:px-[46px] py-2 sm:py-3"}`}>{text}</button>
  
  )

}
