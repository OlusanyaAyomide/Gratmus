import React from 'react'
import LandingLayout from '@/components/utils/LandingLayout.tsx/LandingLayout'
import Hero from '@/components/utils/landing/Hero'
import Professional from '@/components/utils/landing/Professional'
import Connect from '@/components/utils/landing/Connect'
import BuildProfile from '@/components/utils/landing/BuildProfile'
import Discuss from '@/components/utils/landing/Discuss'
import Trending from '@/components/utils/landing/Trending'
import Blog from '@/components/utils/landing/Blog'
import Explore from '@/components/utils/landing/Explore'
import SliderLayout from '@/components/utils/LandingLayout.tsx/SliderLayout'

export default function Landing() {
  return (
      <LandingLayout>
        <Hero/>
        <Explore/>
        <Professional/>
        <Connect/>
        <BuildProfile/>
        <Discuss/>
        <Trending/>
        <Blog/>
      </LandingLayout>
  )
}
