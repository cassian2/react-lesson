import { useState } from "react";
import { Modal } from "./Modal";


export const Contador=()=> {
    const [estado, setEstado] = useState(false);
    
  return (
    <div className="bg-amber-600 p-4 rounded-2xl shadow-lg"> 
    <h1 className="contador">contador</h1>

    <button onClick={()=>setEstado(!estado)} className="bg-red-500 p-2 rounded-lg">
        {estado?"ocultar":"ver"}
    </button>
    {
        estado&& <Modal/> 
    }
    
    </div>

  )
}
