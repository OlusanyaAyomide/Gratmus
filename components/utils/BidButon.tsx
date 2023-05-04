import React from 'react'

interface BidInterface{
  text:string
  className?:string
}

export default function BidButon({text,className}:BidInterface) {
  return (
    <button className={`bg-grat-green ${className} text-sm sm:text-base mt-1 mr-2 rounded-[4px] px-2 py-[2px] whitespace-nowrap btn1-hover text-white`}>{text}</button>
  )
}
  