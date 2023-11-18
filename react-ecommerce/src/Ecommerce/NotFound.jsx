import React from "react"

import { useNavigate } from "react-router-dom"

function NotFound(){
    let navigate = useNavigate()
    return <div>
<h3>404 - Page not found</h3>
        <button onClick={()=>navigate("/")}
      style={{ margin:"10px",background:"green", color:"white", padding:"5px"}}
      >
        Back Home
      </button>
    </div>
}
export default NotFound