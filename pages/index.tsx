import React from 'react'
import LayOut from '@/components/utils/Layout.tsx/Layout'
import Hero from '@/components/utils/landing/Hero'
import Professional from '@/components/utils/landing/Professional'
import Connect from '@/components/utils/landing/Connect'
import BuildProfile from '@/components/utils/landing/BuildProfile'

export default function Home() {
  return (
    <LayOut>
      <Hero/>
      <Professional/>
      <Connect/>
      <BuildProfile/>
    </LayOut>
  )
}
