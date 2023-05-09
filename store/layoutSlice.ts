import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./interface";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface layoutInterface{
    homePage:number
    profileVisible:boolean
    isPosting:boolean
}

const initialState:layoutInterface={
    homePage:1,
    profileVisible:false,
    isPosting:false
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
   
       }
    }  
})


export const layOutActions = layoutSlice.actions
export const layOutType = (state:RootState)=>state.layout
export default layoutSlice.reducer