import React,{useState,useRef} from 'react'
import GratImg from "../utils/GratImg"
import { landingExporter } from '@/public/landing/image/landingExporter'
import { homeResource } from '@/public/home/homeExporter'
import GratButton from '../utils/GratButton'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Topics from './Topics'
import BidButon from '../utils/BidButon'
export default function Uploader() {
  const [imagePath,setImagePath] = useState<string |StaticImageData|null>(null)
  const ref = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
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
    <section className='mt-4 cont mb-12'>
        <div className='w-[110px] h-[36.9px] md:w-[133px] md:h-[43px] mb-20'>
          <GratImg src={landingExporter.Logo}/>
        </div>
        <h1 className='form-header'>Upload Profile Picture</h1>
          <p className='base-text mt-4 text-center mb-12'>PDF,text,Images or videos. Max 10MB each.</p>
          <div className={`max-w-[600px] mx-auto ${imagePath?"pb-6":"pt-6 pb-10"} bg-[#ECFDFC80] border border-dashed rounded-[8px] overflow-hidden`}>
            {!imagePath && <div className='bg-[#ECFDFC80] w-full h-full flex  justify-center'>
              <div>
                <div className='w-[80px] mx-auto h-[80px] mb-4'><GratImg src={homeResource.ArrowUp} piority={true}/></div>
                <h1 className='base-text mb-3 text-center'>Drag And Drop Files</h1>
                <h1 className='text-center mb-3'>OR</h1>
                <div className='mx-auto flex flex-col items-center'>
                  <GratButton onClick={()=>{
                    console.log("heree")
                    ref.current?.click()
                  }} text='Browse files'/>
                  <input ref={ref} onChange={handleFileChange} type='file'  className='hidden'/>
                </div>
              </div>
            </div>
            }
            {imagePath && <Image src={typeof imagePath === 'string' ? imagePath : imagePath.src} alt='' className='w-auto mx-auto h-auto' width={400} height={400}/>}
            {imagePath &&  
            <BidButon  text='"Change File'/>     
         }
          <input ref={ref2} onChange={handleFileChange} type='file' className='hidden'/>
          </div>
          <Topics/>
    </section>
  )
}
