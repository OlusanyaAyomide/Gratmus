import React,{useState} from 'react'
import { PostInterface } from './Post'
import { trimPost } from '@/utils/helper'
export default function PostText(item:PostInterface) {
  const [postNum,setPostNum] = useState({num:15,extended:false})
  const isLonger = item.postText.length > postNum.num
  const handleChange = ()=>{
    setPostNum((prev=>{
      return{...prev,num:prev.num===15?item.postText.length:15,extended:!prev.extended}
    }))
  }
  return (
    <div className='pl-3'>
    {item.nickName && <p className=' text-[#ACC1DAFF] mt-1 text-lg '>{item.nickName}</p>}
    <p className='mt-2 text-base '>{item.jobText}</p>
    {item.tagList.map((tagString,key)=>{
      return <button key={key} className='bg-[#597EE8] mt-3 mr-3 rounded-[4px] text-white p-1'>{tagString}</button>
    })}
    {item.openforJob  && <button className='bg-[#597EE8] mt-3  rounded-[4px] text-white p-1'>Opened for Job</button>} 
    <p className='mt-6 text-sm'>
      {trimPost(item.postText,postNum.num)}{!postNum.extended && isLonger && 
      <span>... <button onClick={handleChange} className='text-grat-green'>view more</button></span>}
      {postNum.extended && <button onClick={handleChange} className='text-grat-green ml-[2px]'> view less</button>}
      </p>
    <div className='flex flex-wrap mt-4'>
      {item.tags.map((item,key)=>{
        return(
          <span key={key} className='rounded-[25px] text-xs mb-1 mr-2 py-[0.5] px-3 bg-[#F1F1F1FF]'>#{item}</span>
        )
      })}
    </div>
  </div>
  )
}
