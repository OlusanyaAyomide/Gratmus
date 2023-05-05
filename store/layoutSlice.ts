import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./interface";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface layoutInterface{
    homePage:number
    profileVisible:boolean
}

const initialState:layoutInterface={
    homePage:1,
    profileVisible:false
}

export const layoutSlice=createSlice({
    name:"layout",
    initialState,
    reducers:{
       setHome(state,action:PayloadAction<number>){
         state.homePage = action.payload
       },
       setProfileStaus(state,action:PayloadAction<boolean>){
        state.profileVisible= action.payload
       }
    }  
})


export const layOutActions = layoutSlice.actions
export const layOutType = (state:RootState)=>state.layout
export default layoutSlice.reducer