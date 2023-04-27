import React,{useState} from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import GratButton from '../utils/GratButton'
import Link from 'next/link'
import FormHeader from './FormHeader'
import type { formState } from '@/store/interface'


const initialState :formState= {firstName:{
  value:"",
  errorMessage:null,
},lastName:{
  value:"",
  errorMessage:null
},email:{
  value:"",
  error:true,
  hovered:false,
  isValid:false,
  errorMessage:null
},password:{
  value:"",
  hovered:false,
  error:true,
  isVisible:false,
  errorMessage:null,
  isValid:0

}}

export default function SignUPForm() {
  const [formState,setformState] = useState<formState>(initialState)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (!formState.email.isValid || formState.password.isValid !==2 || formState.firstName.value === "" || formState.lastName.value === ""){

      if (!formState.email.isValid){
        setformState((prev=>{
          return{...prev,email:{
            ...prev.email,errorMessage:"Entered email is not valid"
          }}
        }))
      }
      if(formState.password.isValid !==2){
        setformState((prev=>{
          return{...prev,password:{
            ...prev.password,errorMessage:"Password requires 8+ chars, 1 upper/lowercase and special character"
          }}
        }))
      }
      if (formState.firstName.value === "" ){
        setformState((prev=>{return{
          ...prev,firstName:{
            ...prev.firstName,errorMessage:"Field cannot be blank"
          }}}))
      }
      if (formState.lastName.value === "" ){
        setformState((prev=>{return{
          ...prev,lastName:{
            ...prev.lastName,errorMessage:"Field cannot be blank"
          }}}))
      }
      return
    }
    //Sucesss
    console.log("Hereeee")
    setformState(initialState)
  }

  const setFocus=(name:string,value:boolean)=>{
      setformState(prev=>{
        if (name==="password"){
          return{...prev,password:{
            ...prev.password,hovered:value
          }}
        }
        else{
          return{...prev,email:{
            ...prev.email,hovered:value
          }}
        }
      })
  }
  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isValid = regex.test(e.target.value)

    setformState(prev=>{
      return{...prev,email:{
        ...prev.email,value:e.target.value,isValid,errorMessage:null
      }}
    })
  }
  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const islong = /^.{8,}$/.test(e.target.value)
    const isValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*()_+={}|[\]\\:;"'<>,.?/~]).{8,}$/.test(e.target.value)
    console.log(isValid)
    setformState(prev=>{
      return{
        ...prev,password:{...prev.password,value:e.target.value,isValid:islong && !isValid ?1:isValid?2:0,errorMessage:null}
      }
    })
  }
  return (
    <div className='px-3 sm:px-4 pt-8 pb-16'>
          <FormHeader/>
          <form className='mt-1' onSubmit={handleSubmit}>

            <div className='my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px]'>
              <span className="label-text">First Name</span>
              {formState.firstName.errorMessage && <span className='pl-3 text-xs text-red-600 font-bold whitespace-nowrap'>{formState.firstName.errorMessage}</span>}
              <input type="text" onChange={(e)=>{setformState(prev=>{
                return({...prev,firstName:{
                  ...prev.firstName,value:e.target.value,errorMessage:null
                }})
              })}} value={formState.firstName.value} className='w-full input-1 ' />
            </div>

            <div className='my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px]'>
              <span className="label-text">Last Name</span>
              {formState.lastName.errorMessage && <span className='text-xs text-red-600 pl-3 font-bold whitespace-nowrap'>{formState.lastName.errorMessage}</span>}
              <input type="text" className='w-full input-1' value={formState.lastName.value} onChange={(e)=>{setformState(prev=>{
                return{...prev,lastName:{
                  ...prev.lastName,value:e.target.value,errorMessage:null
                }}
              })}} />
            </div>

            <div className={`my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px] ${!formState.email.hovered?"":formState.email.isValid?"before:bg-green-600":"before:bg-red-600"}`}>
              <span className="label-text">Email</span>
              {formState.email.errorMessage && <span className="pl-3 font-bold whitespace-nowrap block text-xs text-red-600">{formState.email.errorMessage}</span>}
              <input onFocus={()=>{setFocus("email",true)}} onBlur={()=>{setFocus("email",false)}} value={formState.email.value} 
              onChange={handleEmail}  type="email" className='w-full input-1' />
            </div>
          
            <div className={`my-2 relative before:absolute before:bottom-[1px] before:w-[90%] before:left-[5%]  before:h-[2px] ${!formState.password.hovered?"":formState.password.isValid===0?"before:bg-red-600":formState.password.isValid===1?"before:bg-yellow-600":"before:bg-green-600"}`}>
              <span className="label-text">Password</span>
              {formState.password.errorMessage && <span className="pl-3 font-bold  block text-xs text-red-600">{formState.password.errorMessage}</span>}
              <input onChange={handlePassword} value={formState.password.value}
              onFocus={()=>{setFocus("password",true)}} onBlur={()=>{setFocus("password",false)}} 
               type={formState.password.isVisible?"text":"password"} className='w-full input-1' />


              <button className='absolute right-3 bottom-2 text-2xl text-grat-black' onClick={()=>{setformState(prev=>{
                return{
                  ...prev,password:{...prev.password,isVisible:!prev.password.isVisible}
                }
              })}}>
                  {formState.password.isVisible?<AiFillEyeInvisible/>:<AiFillEye/>}
              </button>
            </div>


            <GratButton text='Sign Up' className='shadow-lg shadow-grat-green/30 w-full block mt-12'/>
            <h1 className='mt-8 text-center base text'>Been here Before <span className='text-grat-green ml-2'><Link href={"/login"}>Log in</Link></span></h1>
          </form>

    </div>
  )
}
