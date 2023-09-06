import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div  className="mx-auto m-5 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='mt-[100px] text-stone-800 text-xl'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
