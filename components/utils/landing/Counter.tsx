import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useCounter } from '@/hooks/useCounter'

export default function Counter() {
  const {entry,ref,inView} = useInView() 
  const count = useCounter(inView,entry)
  return (
    <span ref={ref} className='massive-text font-sarabun  text-grat-green'>About {count.toString()} new People <span className='text-grat-black'>Daily</span></span>

  )
}
