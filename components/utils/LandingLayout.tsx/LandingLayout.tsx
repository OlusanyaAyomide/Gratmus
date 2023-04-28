import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LandingMenuAnimation } from '@/utils/animation'

interface layoutinterface{
  children:React.ReactNode
}


export default function LandingLayout({children}:layoutinterface) {
  const {entry,ref,inView} = useInView({delay:3000})
  return (
    <div className='min-h-[100vh] flex flex-col overflow-hidden max-w-[1400px] mx-auto'>
      <header>
        <div ref={ref}>
          <Header/>
        </div>
        {entry && !inView && <motion.div variants={LandingMenuAnimation} initial="initial" animate="animate" className='fixed top-0  left-0 w-full z-40 bg-white'>
          <Header/>
        </motion.div>}
      </header>
      <main className='h-full flex-1 min-h-[50vh]'>{children}</main>
      <footer className='flex-none'>
          <Footer/>
      </footer>
    </div>
  )
}
