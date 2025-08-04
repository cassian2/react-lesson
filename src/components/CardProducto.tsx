import type { Producto } from "./types/Producto";



export const CardProducto = (item:Producto) => (
    <div className="p-4 m-2 bg-white rounded-lg shadow-md">
        <h3>{item.nombre}</h3>
        <h3>{item.precio}</h3>
        <h3>{item.destacado ? "Destacado" : "No destacado"}</h3>
    </div>
)