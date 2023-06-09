import { configureStore } from "@reduxjs/toolkit";
import layOutReducer from "./layoutSlice"


export const store = configureStore({
  reducer:{
    layout:layOutReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch