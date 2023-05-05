import React,{useState,useRef} from 'react'
import GratImg from "../utils/GratImg"
import { landingExporter } from '@/public/landing/image/landingExporter'
import { homeResource } from '@/public/home/homeExporter'
import GratButton from '../utils/GratButton'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Topics from './Topics'
export default function Uploader() {
  const [imagePath,setImagePath] = useState<string |StaticImageData|null>(null)
  const containerRef = useRef<HTMLDivElement>(null);
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
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    containerRef.current?.classList.add('dragging');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    containerRef.current?.classList.remove('dragging');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    containerRef.current?.classList.remove('dragging');
    const file = e.dataTransfer.files?.[0];
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
  };


  
  return (
    <section className='mt-4 cont mb-12'>
        <div className='w-[110px] h-[36.9px] md:w-[133px] md:h-[43px] mb-20' ref={containerRef}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
          <GratImg src={landingExporter.Logo}/>
        </div>
        <h1 className='form-header'>Upload Profile Picture</h1>
          <p className='base-text mt-4 text-center mb-12'>PDF,text,Images or videos. Max 10MB each.</p>
          <div className={`max-w-[600px] mx-auto ${imagePath?"pb-6":"py-6"} bg-[#ECFDFC80] border border-dashed rounded-[8px] overflow-hidden`}>
            {!imagePath && <div className='bg-[#ECFDFC80] w-full h-full flex  justify-center'>
              <div>
                <div className='w-[80px] mx-auto h-[80px] mb-4'><GratImg src={homeResource.ArrowUp} piority={true}/></div>
                <h1 className='base-text mb-3 text-center'>Drag And Drop Files</h1>
                <h1 className='text-center mb-3'>OR</h1>
                <div className='mx-auto flex flex-col items-center'>
                  <GratButton text='Browse files'/>
                  <input onChange={handleFileChange} type='file'  className='mt-1 block rounded-sm text-xs mx-auto  w-[80px]'/>
                </div>
              </div>
            </div>
            }
            {imagePath && <Image src={typeof imagePath === 'string' ? imagePath : imagePath.src} alt='' className='w-auto mx-auto h-auto' width={400} height={400}/>}
            {imagePath &&  <input onChange={handleFileChange} type='file' className='mt-2 block rounded-sm mx-auto  w-[100px]'/>}
          </div>
          <Topics/>
    </section>
  )
}
