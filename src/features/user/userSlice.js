
import { createSlice } from "@reduxjs/toolkit"

const initialState={
  username:"",
}

const userSlice=createSlice(
  {
    name:'user',
    initialState:initialState,
    reducers:{
      getUsername(state,action){
        state.username=action.payload
      },
   
    }
  }
)
export default userSlice.reducer
export const {getUsername,}=userSlice.actions;