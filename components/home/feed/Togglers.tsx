import React,{useState} from 'react';
import { useAppSelector,useAppDispatch } from '@/hooks/reduxhooks';
import {FaPaperPlane} from "react-icons/fa"
import { layOutActions } from '@/store/layoutSlice';
import { FeedButtons } from '@/utils/compontK';
import {MdCancel} from "react-icons/md"

export default function Togglers() {
  const {homePage} = useAppSelector((state=>state.layout)) 
  const [isToggled,setIsToggled] = useState(false)
  const dispatch = useAppDispatch()
  const handleTogggle=(key:number)=>{
    dispatch(layOutActions.setHome(key))
    setIsToggled(false)
  }
  return (
    <div className={`px-1 w-full z-20 fixed xl:hidden bottom-1 sm:bottom-2  ${isToggled?"":"flex justify-end"}`}>
        <div className='w-full items-end flex flex-col'>
          {isToggled &&  FeedButtons.map((item,key)=>{
            return(
              <button onClick={()=>{handleTogggle(key)}} key={key} className={`bg-white h-[40px] border-[2px] ${homePage === key?"":""} my-1 border-grat-green w-[40px]  rounded-full flex justify-center items-center  ${key===1?"md:hidden":""}`}>
                <span className='text-grat-green text-2xl'>{item.icon}</span>
              </button>
            )
          })}
          <button onClick={()=>{setIsToggled((prev=>!prev))}} className={`rounded-full flex justify-center items-center h-[40px] w-[40px] border-[2px] my-1 border-grat-green bg-white text-grat-green text-2xl`}><span>{!isToggled?<FaPaperPlane/>:<MdCancel/>}</span></button>
        </div> 
    </div>
  )
}
