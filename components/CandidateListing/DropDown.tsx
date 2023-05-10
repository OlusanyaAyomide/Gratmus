import React,{useState} from 'react'
import { FaAngleDown, } from 'react-icons/fa'
interface DropDownInterface{
  text:string

}

export default function DropDown({text}:DropDownInterface) {
  const [isToggled,setIsToggled] = useState(false)
  return (
   <div className='w-6/12  xl:w-[200px] pr-2 xl:px-2'>
      <div className='bg-grat-light-gray max-w-[320px] items-center justify-between flex rounded-[6px] py-2 px-2'>
        <h1 className='w-full'>{text}</h1>
        <button onClick={()=>{setIsToggled((prev=>!prev))}} className={`ml-2 ${isToggled?"rotate-180":""} transition-all duration-300`}><FaAngleDown/></button>
      </div>
    </div>  )
}
