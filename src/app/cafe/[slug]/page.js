

import Navbar from "@/app/components/Navbar";
import CafeNavbarServer from "../CafeNavbarServer";
import CafeInfoServer from "./CafeInfoServer";
export default function page() {


    const num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
     const num2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


    return (

        <div className="relative min-h-screen w-full bg-[#f8fafc] overflow-hidden">
            <div className="absolute  pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px] "></div>
            <div className="absolute  pointer-events-none bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]"></div>

            <Navbar />
            <div className="flex flex-row">
                {/* Navbar lateral con ancho fijo */}
                <div className=" w-15 md:w-64">
                    <CafeNavbarServer />
                </div>



                {/* Contenedor que ocupa el resto y centra CafeInfoServer */}
                <div className="flex flex-1 justify-center items-start z-1">
                    <div className="w-full max-w-2xl">
                        <CafeInfoServer />
                    </div>
                </div>

                <img src={`/imagenes/stain/${num2}.png`} alt={`Imagen número ${num2}`} className="absolute md:h-100 -z-0 left-1/9 md:left-110 top-1/3" ></img>
            </div>
        </div>



    )
}