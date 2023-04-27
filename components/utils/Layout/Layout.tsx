import React from 'react'
import Header from './header/Header'

interface Layout{
    children:React.ReactNode
    footer?:boolean
}

export default function Layout({children,footer=true}:Layout) {
  return (
    <div className='min-h-[100vh] flex flex-col overflow-hidden max-w-[1400px] mx-auto'>
        <header>
            <div>
            <Header/>
            </div>
        </header>
        <main className='h-full flex-1 min-h-[50vh]'>{children}</main>
        {footer && <footer className='flex-none'>
          footer
      </footer>}
    </div>
  )
}
