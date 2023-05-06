import React from 'react'
import Header from './header/Header'
import Footer from '../LandingLayout.tsx/Footer'
import { useInView } from 'react-intersection-observer'

interface Layout{
    children:React.ReactNode
    footer?:boolean
    header?:boolean
}

export default function Layout({children,footer=true,header=true}:Layout) {
  const {ref,inView,entry} = useInView({threshold:0.6})
  console.log(inView)
  return (
    <div className='min-h-[100vh] flex flex-col overflow-hidden max-w-[1400px] mx-auto'>
        {header && <header>
            <div ref={ref}>
            <Header/>
            </div>
            {entry && !inView && <div className='fixed top-0 w-full z-40'>
            <Header/>
            </div>}
        </header>}
        <main className='h-full flex-1 min-h-[50vh]'>{children}</main>
        {footer && <footer className='flex-none'>
          <Footer/>
      </footer>}
    </div>
  )
}
