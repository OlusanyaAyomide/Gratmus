import React ,{useState} from 'react'
import ProfileHeader from './ProfileHeader'
import {BsFillClipboardFill,BsClipboardCheck} from "react-icons/bs"
import {CopyToClipboard} from "react-copy-to-clipboard"
import { PersonList } from '@/utils/Homek'
import GratImg from '../utils/GratImg'

export default function Profile() {
  const [copied,setCopied] = useState(false)
  const text = "Tester Content profuilIlink///hhhuuhehii Content profuilIlink///hhhuuhehii"
  const handlToggle=()=>{
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },4000)
  }
  return (
    <section  className='lg:pr-4'>
        <div className='rounded-lg overflow-hidden pb-10  border border-grat-light-text/10 '>
        <ProfileHeader/>
        <div className='mt-4 px-4'>
        <span className='text-grat-thick font-semibold mb-1'>Profile link</span>
        <div className='flex bg-grat-gray rounded-lg mt-3 pr-3 relative'>
          <div className='overflow-hidden w-full rounded-lg px-4 py-2 '>
            <p className='whitespace-nowrap mr-2'>{text}</p>
          </div>
          <CopyToClipboard text={text}>
          <button onClick={handlToggle} className={`text-xl ml-4 ${copied?"text-green-400":""}`}>{!copied?<BsFillClipboardFill/>:<BsClipboardCheck/>}</button>
          </CopyToClipboard>
          {copied && <p className='absolute  -bottom-4 px-8 text-sm rounded-[4px] text-white bg-green-300 mx-3 w-full overflow-hidden whitespace-nowrap'>Copied</p>}
        </div>
        <span className="mt-4 block font-semibold text-grat-thick">Connect</span>
        <div className='flex items-center px-1'>
          <div className='flex items-center'>
            {PersonList.map((items,keys)=>{
              {return <div key={keys} className='flex items-center'>     
               <div  className={`${keys===0?"bg-grat-profile-green z-[28] -ml-[2px]":keys===1?"bg-[#FFD9BE] -ml-[4px] z-20":keys===2?"bg-[#F8C8F8] -ml-[6px] z-10":"bg-[#EAC6F8] -ml-[8px]"} h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] overflow-hidden rounded-full`} key={keys}><GratImg piority={true} src={items}/></div>
                </div> }
            })}
            <span className='ml-2 text-grat-light-text text-sm'>500+ Connections</span>
          </div>
        </div>
        </div>
    </div>
    </section>

  )
}



