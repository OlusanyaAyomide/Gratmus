import React, { useCallback, useRef, useState } from "react";
import Webcam ,{WebcamProps}from 'react-webcam'
import { FaMicrophone,FaMicrophoneSlash } from "react-icons/fa";


export default function WebCam() {
  const [frontView,setFrontView] = useState(false)
  const [isMuted,setIsMuted] = useState(false)
  const [isPresent,setisPresent] = useState(true)
  const videoSetting={
   height:300,
   width:450,
   facingMode:"user"
  }

  const handleAudio = ()=>{
    setIsMuted((prev=>!prev))
    // setisPresent(false)
    // setTimeout(()=>{
    //   setisPresent(true)
    // },1)
  }
  return (
    <div className="w-fit mx-auto rounded-[6px] overflow-hidden">
      {isPresent && <Webcam 
        imageSmoothing={true}
        audio={true}
        screenshotFormat='image/webp'
        videoConstraints={videoSetting}
        />}
        <div className="flex  mt-2">
          <button className="rounded-full p-3 hover:bg-grat-offwhite" onClick={handleAudio}>
          {/* <span className="text-2xl font-semibold">
            {isMuted?<FaMicrophone/>:<FaMicrophoneSlash/>}
          </span> */}
          </button>

        </div>
    </div>
  )
}
