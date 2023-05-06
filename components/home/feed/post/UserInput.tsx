import React, { useState,useRef } from 'react'
import { BsEmojiSmile,BsYoutube,BsFillMicFill } from 'react-icons/bs'
import EmojiPicker from 'emoji-picker-react'
import { EmojiClickData } from 'emoji-picker-react/dist/types/exposedTypes'
import { BsImage } from 'react-icons/bs'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa'
import BidButon from '@/components/utils/BidButon'


export default function UserInput() {
  const [imagePath,setImagePath] = useState<string |StaticImageData|null>(null)
  const [picked,setPicked] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  const hanldleEmoji=(emoji:EmojiClickData)=>{
    console.log(emoji.emoji)
  }
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Settingh")
        setImagePath({
          src: reader.result as string,
          width: 0,
          height: 0,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className='px-2'>
      {imagePath &&<div className='h-fit w-full mx-auto relative'>
       <Image src={typeof imagePath === 'string' ? imagePath : imagePath.src} alt='' className='w-auto mx-auto h-auto' width={400} height={400}/>
      <span onClick={()=>{setImagePath(null)}} className='absolute right-8 top-4 text-lg  cursor-pointer'><FaTrash/></span>
      </div>}

      <textarea placeholder={imagePath?"Enter Caption":"Share thoughts"} onFocus={()=>{setPicked(false)}} className={`outline-none mt-2 resize-none  rounded-lg border border-grat-light-text/10 py-2 home-scroll ${picked?"h-[80px]":"h-[180px] "} px-2 w-full`}>
      </textarea>

      <button className='mt-2 ml-1' onClick={()=>{setPicked((prev=>!prev))}}><span className='text-lg'><BsEmojiSmile/></span>
      </button>

      {picked &&  
      <div className='home-scroll h-[300px]  overflow-auto'>
          <EmojiPicker searchDisabled={true} height={300} width={"100%"} lazyLoadEmojis={true} onEmojiClick={hanldleEmoji}/>
      </div>
     }
     <div className='flex my-1 items-center justify-between'>
      <div className='flex items-center'>
      <input type="file" ref={ref} onChange={handleFileChange} className='hidden' />
       <span className='cursor-pointer p-2 text-grat-light-text text-lg' 
       onClick={()=>{ref.current?.click()}}><BsImage/></span>
       <span className='cursor-pointer p-2 text-grat-light-text text-xl'><BsYoutube/></span>
       <span className='cursor-pointer p-2 text-grat-light-text'><BsFillMicFill/></span>
      </div>
      <BidButon text='Post' className='px-4' />
     </div>
    </div>
  )
}
