import React,{useState,useRef} from 'react'
import { InitialSkillset } from '@/utils/Candidatesk'
import BidButon from '@/components/utils/BidButon'
export default function AddSkills() {
const [skillSet,setkillSet] = useState(InitialSkillset)
const [isAdding,setIsAdding] = useState(false)
const [newskill,setNewSkill] = useState("")
const ref = useRef<HTMLInputElement>(null)
const handleSubmit =()=>{
    console.log("heree")
    if (!skillSet){return}
    setkillSet((prev)=>{return[...prev,newskill]});
    setNewSkill("")
    setIsAdding(false)
}
const handleBlur =()=>{
    setTimeout(()=>{
        setIsAdding(false)
    },200)
}
const handleFilter =(val:string)=>{
    setkillSet((prev=>prev.filter(item=>item !== val)))
}
  return (
    <div className='mt-5' >
    <span className="block text-grat-thick">Professional Skills</span>
    <div className={`flex flex-wrap md:flex-nowrap  ${skillSet.length > 4?"item-start":"items-center"}`}>
      <div className={`flex w-full flex-wrap gap-y-4 pt-4 items-center`}>
       {skillSet.map((item,key)=>{
        return <button key={key} onClick={()=>{handleFilter(item)}}
        className=' text-white before:hidden before:bottom-6 before:text-text-xs before:text-grat-thick2  hover:before:block before:absolute before:content-["remove"] relative mr-4  bg-grat-green rounded-[6px] py-[2px] px-2'>{item}</button>
       })}
      </div>
      <button onClick={()=>{setIsAdding(true);ref.current?.click()}}
      className={`flex ${isAdding?"opacity-0":""} md:ml-6 items-center mt-3 md:mt-0 `}>
        <div className='h-[18px] px-[3px] rounded-sm  bg-grat-green font-semibold text-white'><span className=' text-xl relative bottom-[5px]'>+</span></div>
           <span className='ml-3 text-grat-green'>Add</span>
        </button>
    </div>
    {isAdding && <div className='flex flex-wrap mt-2 sm:flex-nowrap gap-y-1 items-center'>
        <input type="text" onChange={(e)=>setNewSkill(e.target.value)} 
        onBlur={handleBlur} ref={ref} value={newskill}
        className=' px-2 py-1 bg-grat-offwhite rounded-md w-full outline-none sm:max-w-[400px]' 
        placeholder='Add new skill'/>
        <BidButon text='Add' className='sm:ml-3 md:mb-0.5' onClick={handleSubmit}/>
        <button className='text-grat-thick2 px-4' onClick={()=>{setIsAdding(false);setNewSkill("")}}>cancel</button>
    </div>}
  </div>
  )
}
