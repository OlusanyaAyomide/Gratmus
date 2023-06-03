import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import React,{useRef,useState} from 'react'
import {GoTriangleDown} from "react-icons/go"
import { PostedInterface } from './BottomScroll'
import { basestate } from './CreatePost'
import BidButon from '@/components/utils/BidButon'
import BottomScroll from './BottomScroll'
import Image,{ StaticImageData } from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxhooks'
import { layOutActions } from '@/store/layoutSlice'
import ChangeInterest from './ChangeInterest'


interface ResourcePath{
  type:"image"|"audio"|"video"| null
  path:string | null
}
export default function BasePop({postStatus,setpostStatus}:PostedInterface) {
  const ref = useRef<HTMLInputElement>(null)
  const [imagePath,setImagePath] = useState<string |StaticImageData|null>(null)
  const {postText} = useAppSelector((state=>state.layout))
  const dispatch = useAppDispatch()
  const [resourcePath,setResourcePath] = useState<ResourcePath>({type:null,path:null})
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    if (file) {
      const fileType = file.type.split('/')[0]
      console.log(fileType)
      // const reader = new FileReader();
      // reader.onload = () => {
      //   setImagePath({
      //     src: reader.result as string,
      //     width: 0,
      //     height: 0,
      //   });
      // };
      // reader.readAsDataURL(file);
    }
  }
  return (
    <div>
      {!imagePath && <span className="block text-2xl mb-2 font-bold">Upload Image</span>}
      <div className='flex mt-1 items-center'>
        <div>
        <div className='h-[44px] overflow-hidden w-[44px] rounded-full border-2 border-grat-green bg-grat-profile-green'><GratImg src={homeResource.Person2}/></div>
        </div>
        <div className='ml-2'>
           <h1 className='text-lg font-semibold'>John Smith</h1>
           <p className='text-sm flex'><span>Post To Public</span>
            <span className='text-lg  text-black ml-3'><GoTriangleDown/></span>
           </p>
        </div>
       </div>
       {imagePath && <div className='w-full mb-1 max-h-[200px] mx-auto'>
       <Image src={typeof imagePath === 'string' ? imagePath : imagePath.src} alt='' 
       className='w-auto mx-auto h-auto' 
       width={400} height={400}/>
        </div>}

        <button className="text-grat-green ml-2 mt-6 block font-extrabold text-sm">#Hashtag</button>

        {!postStatus.phovidaud &&  <textarea  value={postText} onChange={(e)=>{dispatch(layOutActions.setPostText(e.target.value))} }className={`mt-4 w-full outline-none resize-none px-2 h-[40px]`} placeholder='John what would you like to talk about ?'>
        </textarea>}

         {postStatus.phovidaud && <div>
        <div className='mt-2 mx-2 rounded-md border border-grat-gray/50 py-16'>
        <div className='h-[38px] w-[44px] sm:h-[44px] sm:w-[64px] mx-auto'>
          <GratImg src={homeResource.uploader}/>
        </div>
         <div>
            <span className="block text-grat-gray text-center">Add photo,Audio,View</span>
            <span className='block text-grat-gray text-center mt-1'>or drag and drop</span>
         </div>
        </div>
        
         <textarea  value={postText} onChange={(e)=>{dispatch(layOutActions.setPostText(e.target.value))} }className={`mt-4 w-full outline-none resize-none px-2 h-[40px]`} placeholder='John what would you like to talk about ?'>
        </textarea>
        </div>}
    

      {postStatus.phovidaud && <ChangeInterest/>}
      {!postStatus.phovidaud && <BottomScroll postStatus={postStatus} setpostStatus={setpostStatus}/>}
      {postStatus.phovidaud &&  <div className='flex mt-4 justify-end items-center'>
        <button className='text-base px-2 mr-2 text-grat-light-text' onClick={()=>{
          setImagePath(null)
          setpostStatus((prev=>{return{...basestate,photos:false};
           }))
        }}>Cancel</button>
         <input accept="audio/*,video/*,image/*"  type="file" ref={ref} onChange={handleFileChange} className='hidden' />
        <BidButon onClick={()=>{ref.current?.click()}} text='Upload' className='px-4'/>
      </div>}    
    </div>
  )
}
