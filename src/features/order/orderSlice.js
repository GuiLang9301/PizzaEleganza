import { createSlice } from "@reduxjs/toolkit"






const initialState={
    orderItem:[]
}

const orderSlice=createSlice(
    {
        name:'order',
        initialState:initialState,
        reducers:{
            createOrderHistory(state,action){
                state.orderItem.push(action.payload)
            }
        }
    }
)

export default orderSlice.reducer
export const{createOrderHistory}=orderSlice.actions