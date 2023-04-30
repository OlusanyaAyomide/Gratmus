import { Notifications } from '@/utils/Homek'
import React from 'react'

export default function NotificationList() {
  return (
    <div className='bg-white rounded-[8px] px-4 py-6'>
      <h1 className='border-b pb-3 text-lg  font-semibold border-[#BCC1CAFF]'>Notification</h1>  
      {Notifications.notificationList.map((item,key)=>{
        return <span key={key} className='text-base block text-grat-light-text my-3'>{item}</span>
      })}
    </div>
  )
}
