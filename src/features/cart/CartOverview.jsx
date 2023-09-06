import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const cartPrice=useSelector(getTotalCartPrice)
  const cartAmount=useSelector(getTotalCartQuantity)
  const{username}=useSelector(store=>store.user)
  if(!cartAmount)return null
// const cartAmount=cartItem?cartItem.length:0
// const cartPrice=cartItem.reduce(((totalPrice,item)=>totalPrice+item.unitPrice),0)
  return (
    <div className="bg-stone-800 text-stone-200 p-4  flex justify-between sticky bottom-0">
      <p className="space-x-4">
        <span className="text-yellow-500">Hello,{username}! Your order:</span>
        <span className="font-bold">{cartAmount} pizzas</span>
        <span className="font-bold">${cartPrice}</span>
      </p>
      <Link to='/cart' className="">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
