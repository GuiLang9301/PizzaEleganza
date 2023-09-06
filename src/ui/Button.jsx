import { Link } from "react-router-dom"

function Button({disabled,children,to,addClick,deleteClick,handleUser,handleIncrement,handleDecrement,clearCart}) {
const className="bg-yellow-400 px-4 py-2 rounded-full font-semibold inline-block hover:bg-yellow-500 active:bg-yellow-600"
    if(to){

return(
    <div>
        <Link to={to} className={className} onClick={handleUser}>{children}</Link>
    </div>
)


    }
    return (
        <div>
            <button disabled={disabled} className={className} onClick={addClick||deleteClick||handleIncrement||handleDecrement||clearCart} >
            {children}
          </button>
        </div>
    )
}

export default Button
