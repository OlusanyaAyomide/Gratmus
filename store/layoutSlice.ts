import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./interface";

export interface layoutInterface{
    count:number
}

const initialState:layoutInterface={
    count:0
}

export const layoutSlice=createSlice({
    name:"layout",
    initialState,
    reducers:{
        increase(state){
            console.log("here")
            state.count +=1
        }
    }  
})


export const layOutActions = layoutSlice.actions
export const layOutType = (state:RootState)=>state.layout
export default layoutSlice.reducer