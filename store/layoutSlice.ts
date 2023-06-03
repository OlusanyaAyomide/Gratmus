import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./interface";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface layoutInterface{
    homePage:number
    profileVisible:boolean
    isPosting:boolean
    postText:string
    profileToggle:{
        information:boolean,
        about:boolean,
        experience:boolean
        education:boolean
        skills:boolean
    }
}

const initialState:layoutInterface={
    homePage:1,
    postText:"",
    profileVisible:false,
    isPosting:false,
    profileToggle:{
        information:false,
        about:false,
        experience:false,
        education:false,
        skills:false

    }
}

interface ToggleProfile{
    section: "information" | "about" | "experience" | "education" | "skills"
}

export const layoutSlice=createSlice({
    name:"layout",
    initialState,
    reducers:{
       setHome(state,action:PayloadAction<number>){
         state.homePage = action.payload
       },
    //    setProfileStaus(state,action:PayloadAction<boolean>){
    //     state.profileVisible= action.payload
    //    },
       setIsPosting(state,action:PayloadAction<boolean>){
        state.isPosting = action.payload
       },
       setProfilePage(state,action:PayloadAction<ToggleProfile>){
            state.profileToggle[action.payload.section] = ! state.profileToggle[action.payload.section] 
       },
       setPostText(state,action:PayloadAction<string>){
        state.postText = action.payload
       }
    }  
})


export const layOutActions = layoutSlice.actions
export const layOutType = (state:RootState)=>state.layout
export default layoutSlice.reducer