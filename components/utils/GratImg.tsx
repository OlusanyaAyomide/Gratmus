import React from 'react'
import Image,{StaticImageData} from 'next/image'

interface ImgInterface{
    src:StaticImageData
    className?:string,
    piority?:boolean
}

export default function GratImg({src,className,piority=false}:ImgInterface){
  return (
   <Image className={`${className?className:"h-fit w-fit"}`} alt='' src={src}/>
  )
}
