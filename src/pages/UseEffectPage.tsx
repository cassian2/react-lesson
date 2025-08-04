import { useEffect, useState } from "react";
import { BtnVolver } from "../components/ui/buttons/BtnVolver"

export const UseEffectPage=() => {
  const [segundos, setSegundos] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((s)=>s + 1);
    }, 1000);
    return()=>clearInterval(interval);
    
  }, [])
  
    
  return (
      <div className="h-screen bg-[#584] text-black">
        <BtnVolver/>
          
        <span>UseEffectPage</span>
        <span>{segundos}</span>
      </div>
  );
}