import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cartItem:[
        
    ],
  



}



const cartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addItem(state,action){
            state.cartItem.push(action.payload)
    
        
        },

        deleteItem(state,action){
            state.cartItem=state.cartItem.filter(item=>item.name!==action.payload)
        },
       incrementItem(state,action){
   const item=state.cartItem.find(item=>item.pizzaId===action.payload)
item.quantity++
item.totalPrice=item.quantity*item.unitPrice
       },

       decrementItem(state,action){
        const item=state.cartItem.find(item=>item.pizzaId===action.payload)
        item.quantity--
        item.totalPrice = item.quantity * item.unitPrice;

       },

       clearCart(state,action){
        state.cartItem=[]
       }

      
    }
}

)
export default cartSlice.reducer
export const { addItem,deleteItem,incrementItem,decrementItem,clearCart } =cartSlice.actions;

export const getTotalCartPrice=(state)=>state.cart.cartItem.reduce((sum,item)=>sum+item.totalPrice,0)
export const getTotalCartQuantity=(state)=>state.cart.cartItem.reduce(((sum,item)=>sum+item.quantity),0)

export const getCurrentQuantityById=id=>state=>state.cart.cartItem.find(item=>item.pizzaId===id)?.quantity??0;