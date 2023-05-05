import React from 'react'
import NotificationList from './NotificationList'
import Promoted from './Promoted'
import { Notifications } from '@/utils/Homek'
import MostViewed from './MostViewed'
import { useInView } from 'react-intersection-observer'


export default function Notification() {
  const {ref,inView,entry} = useInView()
  return (
    <div className='py-2 px-2 lg:-mx-2 pt-12' ref={ref}>
      <NotificationList/>
      <Promoted title='Promoted Ads' array={Notifications.promotedAds}/>
      <Promoted title2='Most Viewed This Week' array={Notifications.promotedAds}/>
      <MostViewed/>
      {entry && !inView && <div className='fixed top-20 w-[260px] lg:w-[300px]'>
        <MostViewed onFixed={true}/>
      </div>}
    </div>
  )
}
