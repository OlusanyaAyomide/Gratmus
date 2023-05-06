import React from 'react'
import TopSearch from './TopSearch'
import { FeedMock } from '@/utils/Homek'
import Post from './Post'
import CreatePost from './post/CreatePost'

export default function Feed() {
  return (
    <div className='pt-6 md:pt-12 px-2  md:-mx-4 lg:-mx-0 lg:px-3'>
      <TopSearch/>
      <CreatePost/>
      <div className='mt-2'>
        {FeedMock.map((item,key)=>{
            return <Post {...item} key={key}/>
        })}
      </div>
    </div>
    
  )
}
