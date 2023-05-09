import React from 'react'
import NotificationList from './NotificationList'
import Promoted from './Promoted'
import { Notifications } from '@/utils/Homek'
import MostViewed from './MostViewed'


export default function Notification() {

  return (
    <div className='py-2 px-2 lg:-mx-2 pt-12 pb-6' >
      <NotificationList/>
      <Promoted title='Promoted Ads' array={Notifications.promotedAds}/>
      <Promoted title2='Most Viewed This Week' array={Notifications.promotedAds}/>
      <MostViewed/>
    </div>
  )
}
