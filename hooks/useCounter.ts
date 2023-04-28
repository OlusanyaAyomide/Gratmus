import { useState,useEffect } from "react"

export function useCounter(isInview:boolean,entry:IntersectionObserverEntry | undefined){
    const [count,setCount] = useState<number>(0)
    useEffect(()=>{
        if(!isInview || !entry) {return}
        if (count < 16000){
            setTimeout(()=>{
                setCount((prev=>prev+1000))
            },80)
        }else if (count>=16000 && count < 16700 ){
            setTimeout(()=>{
                setCount((prev=>prev + 100))
            },120)
        }else if(count >= 16700 && count <16780){
            setTimeout(()=>{
                setCount((prev=>prev + 10))
            },140)
        }
        else if(count >= 16780 && count < 16786){
            setTimeout(()=>{
                setCount((prev=>prev + 1))
            },240)
        }
    },[isInview,count,setCount])
    return count
}