import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";


function Header() {



  return (
    <header className="bg-yellow-500 uppercase tracking-widest px-10 py-5 border-b-2 border-stone-300  flex justify-between items-center gap-[100px]">
      <Link to='/' className="font-pizza text-4xl ms-5">Pizza Eleganza</Link>
      <SearchOrder />
 
    </header>
  );
}

export default Header;
