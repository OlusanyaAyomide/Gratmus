import { trimPost } from '@/utils/helper'
import React, { useState } from 'react'

interface ViewMoreInterface{
    length:number
    text:string
    style?:string
    viewLess?:string
    viewMore?:string
    className?:string
}

export default function Viewmore({text,className="",length,style="",viewLess="view less",viewMore="view More"}:ViewMoreInterface) {
  const [textLength,setLength] = useState(length)
  const [textString,setText] = useState(text)
  const [isExtended,setIsExtended] = useState(false)
  const isLonger = text.length > length 
  if (!isLonger){
    return <p>{text}</p>
  }
  const handleToggle = ()=>{
    !isExtended?setLength(text.length):setLength(length)
    setIsExtended((prev=>!prev))
  }
  return(
    <p className={className}>{trimPost(textString,textLength)} <button onClick={handleToggle}>
        <span className={`${style}`}>{isExtended?viewLess:` ..${viewMore}`}</span> 
      </button></p>
  )
}
