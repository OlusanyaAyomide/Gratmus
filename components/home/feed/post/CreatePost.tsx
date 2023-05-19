import React,{useState} from 'react'
import { useAppDispatch } from '@/hooks/reduxhooks'
import BasePop from './BasePop'
import BottomScroll from './BottomScroll'
import { layOutActions } from '@/store/layoutSlice'
import { FaTimes } from 'react-icons/fa'
import VideoPop from './VideoPop'
import LiveEvent from './LiveEvent'
export interface postInterface{
  isSearching:boolean
  photos:boolean
  videos:boolean
  live:boolean
}
export const basestate:postInterface={
  isSearching:false,
  photos:false,
  videos:false,
  live:false
}
export default function CreatePost() {
  const dispatch = useAppDispatch()
  const [postStatus,setPostStatus] = useState<postInterface>(basestate)
  return (
    <div className='my-filter fixed z-50 inset-0 w-full  h-[100vh] my-blur bg-black/60 px-4 sm:px-12'>
      <div className='px-2 py-4 relative mx-auto max-h-[90vh] overflow-auto home-scroll sm:px-4 w-full max-w-[550px] rounded-lg sz mt-12 bg-white'>
      <button onClick={()=>dispatch(layOutActions.setIsPosting(false))} className='h-[50px] w-[50px] rounded-full absolute top-2 right-2 hover:bg-grat-light-gray flex items-center justify-center'><span className='text-grat-black text-xl'><FaTimes/></span></button>
       {!postStatus.videos && !postStatus.live &&
        <BasePop  postStatus={postStatus} setpostStatus={setPostStatus}/>}
       {postStatus.videos &&  <VideoPop postStatus={postStatus} setpostStatus={setPostStatus}/> }
       {postStatus.live &&  <LiveEvent postStatus={postStatus} setpostStatus={setPostStatus}/> }
      </div>
    </div>

    // <div onClick={()=>{
    // }} className='overflow-auto  my-filter bg-black/80 fixed z-50 inset-0 w-full  h-[100vh] my-blur bg-black-60 px-4 sm:px-12'>
    //   <div onBlur={()=>{
    //   }} className='px-2 py-4 mx-auto max-h-[90vh] overflow-auto home-scroll sm:px-4 w-full max-w-[550px] rounded-lg sz mt-12 bg-white'>  
    //     <PostHeader/>
    //     <UserInput/>
    //   </div>
    // </div>
  )
}
