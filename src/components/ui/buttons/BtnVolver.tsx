import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const BtnVolver=() => {
    const navigate=useNavigate();
    return (
        <button onClick={()=>navigate(-1)} className="abslute top-4 left-4 bg-white text-black px-4 py-2 hover:bg-gray-500 p-3 rounded-full cursor-pointer" >
            <Icon icon="si:arrow-left-fill" width="24" height="24" />
        </button>
    );
} 
