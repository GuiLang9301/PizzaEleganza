import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { getUsername } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
const dispatch=useDispatch()
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='text-sm sm:text-lg'>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
       className='rounded-full p-3 text-base text-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 transition-all duration-300 border my-3'
      />

      {username !== '' && (
        <div>
          <Button to='/menu' handleUser={()=>dispatch(getUsername(username))}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
