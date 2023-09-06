// import { useState } from "react";
import {  useSelector } from "react-redux";
import { useState } from "react";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store'
import { clearCart, getTotalCartPrice } from "../cart/cartSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {cartItem} = useSelector(store=>store.cart);
  const totalCartPrice=useSelector(getTotalCartPrice)
  const priorityPrice=withPriority?totalCartPrice*0.2:0
  const totalPrice=totalCartPrice+priorityPrice
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const error = useActionData();


  if(!cartItem.length)return <EmptyCart/>
  return (
    <div className="mx-auto w-[500px] mt-10 p-4">
      <h2 className="my-2 text-lg font-bold text-yellow-500 mb-5">Ready to order? Let's go!</h2>

      <Form method='POST' className="space-y-3">
        <div >
          <label>First Name</label>
          <input type='text' name='customer' required  className="input border"/>
        </div>

        <div >
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' className="input border " required />
          </div>
          {error?.phone && <p className="text-red-500 font-bold ">{error.phone}</p>}
        </div>

        <div >
          <label>Address</label>
          <div>
            <input type='text' name='address' className="input  border" required />
          </div>
        </div>

        <div >
          <input
       className="h-4 w-4 me-2"
            type='checkbox'
            name='priority'
            id='priority'
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' value={JSON.stringify(cartItem)} name='cart' />
          <Button disabled={isSubmitting} >
            {isSubmitting ? "Placing Order" : `Order now for $${totalPrice}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const data = await Object.fromEntries(formData);
  // console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = "Please provide correct phone number";

  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);


store.dispatch(clearCart())


  return redirect(`/order/${newOrder.id}`);
}
