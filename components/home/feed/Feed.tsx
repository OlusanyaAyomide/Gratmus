import React from 'react'
import TopSearch from './TopSearch'
import { FeedMock } from '@/utils/Homek'
import Post from './Post'

export default function Feed() {
  return (
    <div className='py-2 px-2 md:-mx-4 lg:mx-0 lg:px-3'>
      <TopSearch/>
      <div className='mt-2'>
        {FeedMock.map((item,key)=>{
            return <Post {...item} key={key}/>
        })}
      </div>
    </div>
    
  )
}
