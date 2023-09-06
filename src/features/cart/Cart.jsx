import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from './EmptyCart'
// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = fakeCart;
const {username}=useSelector(store=>store.user)
const {cartItem}=useSelector(store=>store.cart)
const dispatch=useDispatch()

const cartElements=cartItem.map(item=>
  
    <CartItem item={item} key={item.pizzaId}/>
  
  
  )

if (!cartItem.length) return <EmptyCart/>

  return (
    <div className="mx-auto m-5 flex flex-col gap-4">
      <LinkButton to='/menu' >&larr; Back to menu</LinkButton>

      <h2>Your cart,{username}</h2>

<div>
{cartElements}
</div>
      <div className="flex gap-7">
        
        <Button to='/order/new'>Order pizzas</Button>
        <Button clearCart={()=>dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
