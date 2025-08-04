import imagenlocal from '../assets/imagen.jpeg';
import { BtnVolver } from '../components/ui/buttons/BtnVolver';
export const ImagenesPage=() => {
    return (
        <main className="max-w-3xl mx-auto p-6 space-y-10">
            <BtnVolver />
            <h1 className="text-3xl font-bold text-center">Imagenes con REACT</h1>
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Imagenes local importada</h2>
                <img src={imagenlocal} alt="" />
            </section>
        </main>
    );
}