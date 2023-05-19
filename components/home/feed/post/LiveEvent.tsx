import React,{useRef,useState,useEffect} from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { PostedInterface } from './BottomScroll'
import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import { basestate } from './CreatePost'
import BidButon from '@/components/utils/BidButon'
import BottomScroll from './BottomScroll'
import WebCam from './WebCam'


export default function LiveEvent({postStatus,setpostStatus}:PostedInterface) {
  const [isLive, setIsLive] = useState(false);

  // useEffect(()=>{
  //   if(!isLive){return}
  //   let mediaRecorder: MediaRecorder | undefined;
  //   let chunks: Blob[] = [];
  //   mediaRecorder = new MediaRecorder(webcamRef?.current?.video);
  //   mediaRecorder.ondataavailable = (e: BlobEvent) => {
  //     chunks.push(e.data);
  //   };

  // },[isLive])

  return (
    <div >
      {!isLive && <span className="block text-2xl mb-2 font-bold">Go Live</span>}
      <div className='flex mt-1 items-center'>
        <div>
        <div className='h-[44px] overflow-hidden w-[44px] rounded-full border-2 border-grat-green bg-grat-profile-green'><GratImg src={homeResource.Person2}/></div>
        </div>
        <div className='ml-2'>
           <h1 className='text-lg font-semibold'>John Smith</h1>
           <p className='text-sm flex mb-2'><span>Post To Public</span>
            <span className='text-lg  text-black ml-3'><GoTriangleDown/></span>
           </p>
        </div>
        </div>
        <span className="text-lg font-semibold">Preview</span>
        {!isLive && <span className='mt-6  block mb-16 ml-2 text-grat-light-text'>Share live Events With friends</span>}
        {isLive && <WebCam/>}  
          {!postStatus.live && <BottomScroll postStatus={postStatus} setpostStatus={setpostStatus}/>}
        {postStatus.live &&  <div className='flex mt-4 justify-end items-center'>
        <button className={`text-base ${isLive?"bg-red-500 py-1 px-3  text-white":""} px-2 rounded-[6px] mr-2 text-grat-light-text`} onClick={()=>{
          setpostStatus((prev=>{return{...basestate,live:false};
           }))
        }}>Cancel</button>
        {!isLive &&  <BidButon onClick={()=>{setIsLive(true)}} text='Click to Go live' className='px-2'/>}
      </div>}  
    </div>
  )
}
