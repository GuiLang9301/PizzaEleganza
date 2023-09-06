import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem,deleteItem,incrementItem,decrementItem,getCurrentQuantityById } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id,name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const {cartItem}=useSelector(store=>store.cart)
  // console.log(cartItem)
const added=cartItem.some(item=>item.name===name)
const dispatch=useDispatch()
const currentQuantity=useSelector(getCurrentQuantityById(id))
function handleCartClick(){
  const newItem={
    pizzaId:id,
    name,
    unitPrice,
    quantity:1,
    totalPrice:unitPrice*1
  }

  dispatch(addItem(newItem))

}

  return (
    <li className="flex   rounded-md">
      <img src={imageUrl} alt={name} className={`h-32 me-3 rounded-md ${soldOut?'grayscale opacity-70':''}`} />
      <div className="flex flex-col grow my-3  mx-3">
        <p className="text-lg font-semibold text-stone-800">{name}</p>
        <p className="text-base  text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
      {added?
      <div className="flex gap-5">
      <div className="flex items-center gap-3">
        <Button handleIncrement={()=>dispatch(incrementItem(id))}>+</Button>
        {currentQuantity}
        <Button handleDecrement={()=>{
          if (currentQuantity<=0)return
          dispatch(decrementItem(id))
          }}>-</Button>
        </div>  
 <Button deleteClick={()=> dispatch(deleteItem(name))}>Delete</Button>
      </div>
     :
      (!soldOut&&<Button addClick={handleCartClick}>Add to Cart</Button>)}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
