import { TopicList } from '@/utils/Homek'
import React, { useState } from 'react'
import GratButton from '../utils/GratButton'

interface TopicInterface{
  id:number,
  tag:string
}
interface ExtendedTopicInterface extends TopicInterface {
  isPresent: boolean;
}

export default function Topics() {
  const [items,setItems] = useState<TopicInterface[]>([])
  console.log(items)

  const editChosen = ({id,tag,isPresent}:ExtendedTopicInterface)=>{
   if (isPresent){
    setItems((prev=>[...prev,{id,tag}]))
    return
   } 
   setItems((prev=>prev.filter(item=>item.id !== id)))
  }
  // const CheckPresence =(id:number)=>{
  //   for (let val of items){
  //     if (val.id === id){
  //       return true
  //     }
  //   }
  //   return false
  // }
  return (
    <section className='mt-16 cont -mx-8 sm:mx-0'>
      <h1 className="section-header text-center text-grat-green">INTERESTED TOPICS</h1>	
      <p className='text-center base-text text-grat-light-text'>Select Interested topic to you</p>
      <div className='mt-6 flex flex-wrap '>
        {TopicList.map((item,key)=>{
          const isPresent = items.some(obj => obj.id === item.id);
          const object ={id:item.id,tag:item.tag,isPresent:!isPresent}
          return <button onClick={()=>editChosen(object)} key={key} className={`text-xs rounded-[26px] my-3 mx-2 px-4 py-2 md:mx-4 lg:mx-8  ${isPresent?"bg-grat-green text-white":"border-grat-green border bg-white text-grat-green"}`}>{item.tag}
          </button>
        })}
      </div>
      <p className='mt-4 base-text text-center'>Pick more than 5 topic that interests you</p>
      <GratButton className='block mt-3 mx-auto' text='Continue'/>
    </section>
  )
}
