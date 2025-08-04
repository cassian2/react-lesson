import CartList from "../components/CartList";

export const Home = () => {
    // Esta es la página principal de la aplicación
    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
            <div className=" mx-auto w-full max-w-3xl ">
                <h1 className="text-3xl font-bold text-center mb-8">React 19- teoria</h1>
                <CartList/>
            </div>
        </main> 
    );
}