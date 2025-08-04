import { NavLink, Outlet } from "react-router-dom";

export const RutasAnidadasPage=() => {
    return (
        <div className="p-6 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center">Panel de Usuario</h2>
            <nav className="flex gap-4 justify-center">
                <NavLink to={"perfil"} className={({ isActive }) =>
                    isActive ? "px-4 py-2 rounded-lg bg-black text-white font-semibold shadow" : "px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100"
                        }>
                    Perfil
                </NavLink>
                <NavLink to={"configuracion"} className={({ isActive }) =>
                    isActive ? "px-4 py-2 rounded-lg bg-black text-white font-semibold shadow" : "px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100"
                        }>
                    Configuracion
                </NavLink> 
            </nav>
            <section>
                <Outlet/>
            </section>  
        </div>
    );
}