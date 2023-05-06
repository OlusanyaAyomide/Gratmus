import React from 'react'
interface OverLayyInterface{
   handleCancel:()=>void 
   index:number
   isHidden?:boolean
}

export default function OverLay({handleCancel,index,isHidden}:OverLayyInterface) {
  return (
    <div  onScroll={handleCancel} style={{zIndex:index}} onClick={handleCancel} className={`xl:hidden my-filter fixed -inset-1 my-blur w-[120%] h-[110vh] bg-black/60 ${isHidden?"lg:hidden":""}`}></div>
  )
}
