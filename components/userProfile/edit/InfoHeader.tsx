import React, { useRef,useState } from 'react'
import Image,{StaticImageData} from 'next/image'
import { homeResource } from '@/public/home/homeExporter'
import { FaAngleDown } from 'react-icons/fa'
import GratImg from '@/components/utils/GratImg'
import { CompanyExporter } from '@/public/company/CompanyExporter'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxhooks'
import { layOutActions } from '@/store/layoutSlice'

export default function InfoHeader() {
  const [imagePath,setImagePath] = useState<string |StaticImageData>(homeResource.Person2)
  const {profileToggle:{information}} = useAppSelector((state=>state.layout))
  const dispatch = useAppDispatch()
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
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div className='flex  justify-between items-center mb-4'>
      <h1 className='font-semibold text-lg w-full flex flex-wrap'>GENERAL INFORMATION 
        <span className='bg-[#FFF6F0FF] py-1 ml-4 px-2 text-sm text-grat-orange rounded-md'>100% completed</span>
      </h1>
      <button
       onClick={()=>{dispatch(layOutActions.setProfilePage({section:"information"}))}}
        className={`h-[18px] w-[18px] transition-all duration-300 ${!information?"rotate-180":""}`}><GratImg src={CompanyExporter.AngleDown}/></button>
      {/* <span className='text-xl sm:text-2xl'><FaAngleDown/></span> */}
    </div>
    {information && <div>
      <span className="block text-grat-thick text-base mb-1 ml-[2px]">Avatar</span>
      <div className='flex items-center'>
        <div className='h-[60px] w-[60px] md:h-[76px] md:w-[76px] rounded-full overflow-hidden bg-grat-profile-green'>
        <Image src={typeof imagePath === 'string' ? imagePath : imagePath.src} alt='' className='mx-auto object-contain' priority={true} width={76} height={76}/>
        </div>
          <button onClick={()=>{ref.current?.click()}} className='text-grat-green px-2 py-1 rounded-sm mx-1 bg-grat-button-green xs:mx-2 sm:mx-3'>Change</button>
          <input ref={ref} onChange={handleFileChange} type='file'  className='hidden'/>
          <button onClick={()=>{setImagePath(homeResource.Person2)}} className='text-grat-light-text'>Remove</button>
      </div>
    </div>}


  </div>
  )
}
