import React from 'react'

interface StartedInterface{
  className?:string
  headerText:string
  buttonText:string
  ptext:string
  pstyle?:string
}

export default function StartedSection({className="",pstyle="", headerText,buttonText,ptext}:StartedInterface){
  return (
    <div className={className}>
      <p className="text-center font-semibold text-grat-orange text-lg">{headerText}</p>
      <p className={`mt-5 mb-8 ${pstyle}`}>{ptext}</p>
    <button className="block rounded-md  bg-grat-orange text-grat-orange text-white py-2 w-full">{buttonText}</button>
  </div>
  )
}
