import React from 'react'

export default function Background() {
  return (
    <>
     <div className='absolute bg-grat-green bottom-0 z-10 right-0 h-[153px] w-[260px] sm:w-[380px] md:w-[500px] xl:w-[744px]'></div>
      <div className='rounded-full bg-grat-green  absolute -top-[120px] -right-[162px] h-[320px] w-[320px] md:w-[541px] md:h-[541px] lg:-right-[200px]'></div>
      <div className='hidden rounded-full bg-grat-green absolute -bottom-[320px] -left-[362px] md:block h-[641px] w-[641px] lg:-left-[300px]'></div>
    </>
  )
}
