import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser'
import Button from './Button';
import logo from '../img/pizza.jpg'
function Home() {
  const {username}=useSelector(store=>store.user)
  return (
    <div className='text-center mb-5 sm:mb-10   mx-auto'>
      <h1 className='text-3xl text-stone-800 font-semibold  my-8 sm:my-[80px] sm:text-5xl font-pizza '>
        The 
    
         <span className="text-yellow-500 mx-2  ">

        Best 
        </span> pizza <br/>straight out of the oven, <br/>straight to you.
      </h1>
      <img alt="pizza" src={logo} className='h-[300px] mx-auto my-2'/>
      {username===""?<CreateUser/>:
      <div>
        <Button to='/menu'>Continue the order</Button>
       

      </div>
      
      }
    </div>
  );
}

export default Home;
