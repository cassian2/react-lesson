import { useEffect, useState } from "react";

export const ApisPage=() => {
    const [Pokemos, setPokemos] = useState([])
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((response) => response.json())
      .then((data) => {
        setPokemos(data.results);
        console.log(data.results)
      })
      .catch((error) => console.error("Error fetching data:", error));
    
      return () => {
        
      } 
    }, [])
    
    return (
        <div className="h-screen bg-amber-30 text-black">
            
            {
                Pokemos.map((pokemon, index) => (
                    <div key={index} className="p-4 m-2 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">{pokemon.name}</h3>
                        <a href={pokemon.url}>visitar</a>
                    </div>
                ))
            }
        </div>
    );
}
