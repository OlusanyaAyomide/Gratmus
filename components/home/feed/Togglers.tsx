import React,{useState} from 'react';
import { useAppSelector,useAppDispatch } from '@/hooks/reduxhooks';
import {FaPlus} from "react-icons/fa"
import { layOutActions } from '@/store/layoutSlice';
import { FeedButtons } from '@/utils/compontK';
import {BsPenFill} from "react-icons/bs"
import OverLay from '@/components/utils/OverLay';

export default function Togglers() {
  // const {homePage} = useAppSelector((state=>state.layout)) 
  const [isToggled,setIsToggled] = useState(false)
  // const [overLay,setOverLay] = useState(false)
  const dispatch = useAppDispatch()

  const handleOverLay = ()=>{
    setIsToggled(false)
    // setOverLay(false)
  }
  const handlePost = ()=>{
    dispatch(layOutActions.setIsPosting(true))
    setIsToggled(false)
  }
  const handleTogggle=(key:number)=>{
    dispatch(layOutActions.setHome(key))
    setIsToggled(false)
    // setOverLay(false)
  }
  return (
    <div className={`px-1 w-full z-20 fixed xl:hidden bottom-1 sm:bottom-2  ${isToggled?"":"flex justify-end"}`}>
        {isToggled && <OverLay index={20} handleCancel={handleOverLay}/>}
        <div className='w-full items-end flex flex-col'>
          {isToggled && 
          <div className={`flex z-30 items-center md:hidden`}>
             <span className='text-white text-xs mr-[2px]'>Post</span>
            <button onClick={handlePost}  className='feed-buttons z-30 '><span className='text-grat-green'><BsPenFill/></span></button>
          </div>
       }
          {isToggled &&  FeedButtons.map((item,key)=>{
            return(
              <div key={key} className={`flex z-30 items-center ${key===1?"md:hidden":""}`}>
                <span className='text-white text-xs mr-[2px]'>{item.text}</span>
                <button onClick={()=>{handleTogggle(key)}} key={key}
               className={`bg-white h-[40px] border-[2px]  my-1 border-grat-green w-[40px]  rounded-full  flex justify-center items-center  `}>
                <span className='text-grat-green text-2xl'>{item.icon}</span>
              </button>
              </div>
            )
          })}
          {!isToggled &&<button onClick={()=>{setIsToggled(true)}} 
          className={`feed-buttons`}><span><FaPlus/></span>
          </button>}
        </div> 
    </div>
  )
}
