import React from 'react'

interface buttonInterface{
    text:string
    type?:number
    className?:string
}

export default function GratButton({text,type=1,className}:buttonInterface) {
  if (type ===1){
    return (
      <button className={`bg-grat-green rounded-[25px] px-10 py-2 sm:px-12 sm:py-3 text-white ${className} active:bg-grat-green whitespace-nowrap active:text-white transition-all duration-300  hover:text-grat-green hover:bg-white sm:hover:px-[47px] hover:border hover:border-grat-green `}>
        {text}
      </button>
    )
  }  
  return(
      <button className={`bg-white  border-grat-green border-2 rounded-[26px]   text-grat-green hover:active:text-white hover:active:bg-grat-green whitespace-nowrap transition-all duration-300 ${className?className:"px-[38px] sm:px-[46px] py-2 sm:py-3"}`}>{text}</button>
  
  )

}
