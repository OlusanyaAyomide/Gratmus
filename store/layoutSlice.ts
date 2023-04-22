import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./interface";

export interface layoutInterface{
    navActive:boolean
}

const initialState:layoutInterface={
    navActive:false
}

export const layoutSlice=createSlice({
    name:"layout",
    initialState,
    reducers:{
        setNav(state){
            state.navActive = !state.navActive
        }
    }  
})


export const layOutActions = layoutSlice.actions
export const layOutType = (state:RootState)=>state.layout
export default layoutSlice.reducer