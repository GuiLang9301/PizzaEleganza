import { Link, useNavigate } from "react-router-dom"

function LinkButton({to,children}) {
const navigate=useNavigate()
const className="text-blue-600 hover:text-blue-800"
    if(to===-1){
        return(
            <button    
            className={className}
            onClick={() => navigate(-1)}
            >{children}</button>
        )
    }
    return (
        <div>
                  <Link to={to} className={className}>{children}</Link>

        </div>
    )
}

export default LinkButton
