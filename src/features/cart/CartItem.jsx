import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers"
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const {  name, quantity,unitPrice } = item;
const dispatch=useDispatch()
const totalPrice=quantity*unitPrice
  return (
    <div className="flex items-center my-3 border-b pb-3 gap-5">
   
    <li className="flex gap-3 w-[500px] justify-between  items-center mx-auto text-lg ">
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
      <Button deleteClick={()=>dispatch(deleteItem(name))}>Delete</Button>
      </div>
  );
}

export default CartItem;
