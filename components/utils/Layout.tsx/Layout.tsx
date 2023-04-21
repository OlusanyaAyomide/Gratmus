import React from 'react'
import Header from './Header'
import Footer from './Footer'


interface layoutinterface{
  children:React.ReactNode
}


export default function LayOut({children}:layoutinterface) {
  return (
    <div className='min-h-[100vh] flex flex-col'>
      <header>
        <div>
          <Header/>
        </div>
      </header>
      <main className='h-full flex-1 min-h-[50vh]'>{children}</main>
      <footer className='flex-none bg-clique-purple'>
          <Footer/>
      </footer>
    </div>
  )
}
