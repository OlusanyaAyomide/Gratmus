import GratImg from '@/components/utils/GratImg'
import { homeResource } from '@/public/home/homeExporter'
import React,{useRef,useState} from 'react'
import {GoTriangleDown} from "react-icons/go"
import { PostedInterface } from './BottomScroll'
import { basestate } from './CreatePost'
import BidButon from '@/components/utils/BidButon'
import BottomScroll from './BottomScroll'
import Image,{ StaticImageData } from 'next/image'


export default function BasePop({postStatus,setpostStatus}:PostedInterface) {
  const ref = useRef<HTMLInputElement>(null)
  const [imagePath,setImagePath] = useState<string |StaticImageData|null>(null)
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePath({
          src: reader.result as string,
          width: 0,
          height: 0,
        });
      };
      reader.readAsDataURL(file);
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
      <textarea onFocus={()=>{
          setpostStatus((prev=>{return{...basestate,photos:true}}))
          }} className={`mt-4 w-full outline-none resize-none px-2 ${postStatus.photos?"h-[140px]":imagePath?"h-[100px]":"h-[40px]"}`} placeholder='John what would you like to talk about ?'>
        </textarea>
      <span className="text-grat-green ml-2 mt-4 font-extrabold text-sm">#Hashtag</span>
      <span className='text-sm block mt-2'>Your interest</span>
      {!postStatus.photos && <BottomScroll postStatus={postStatus} setpostStatus={setpostStatus}/>}
      {postStatus.photos &&  <div className='flex mt-4 justify-end items-center'>
        <button className='text-base px-2 mr-2 text-grat-light-text' onClick={()=>{
          setImagePath(null)
          setpostStatus((prev=>{return{...basestate,photos:false};
           }))
        }}>Cancel</button>
         <input accept="image/*"  type="file" ref={ref} onChange={handleFileChange} className='hidden' />
        <BidButon onClick={()=>{ref.current?.click()}} text='Upload Image' className='px-4'/>
      </div>}    
    </div>
  )
}
