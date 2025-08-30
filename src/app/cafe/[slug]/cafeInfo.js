"use client"
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";


export default function cafeInfo({ data }) {
    const params = useParams();
    const cafeAudio = useRef(null);




    const cafe = data.find((c) => c.slug === params.slug);
    useEffect(() => {
        cafeAudio.current = new Audio(cafe.audio);
    }, []);

    const start = () => {
        cafeAudio.current.play();
    }
    return (
        <div>

           

                  {cafe.imagenes?.[0] && (
                <div className="lg:flex hidden bg-gradient-to-t from-[#f5f5f5] to-[#FFFFFF] h-110 w-90 mb-5  justify-center rotate-6 absolute left-1/8 top-28 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:z-10 border-1 border-gray-100">
                    <img src={cafe.imagenes[0]} className="h-90 p-4"></img>
                </div>
                  )}

            <div className=" relative font-source-code-pro h-auto   bg-[url(/imagenes/papel.jpg)] bg-gradient-to-t from-[#efeeee]/50 to-[#FFFFFF]/50 w-70 md:w-90 p-5  text-gray-800 mb-10 shadow  hover:scale-102 transition-transform duration-500 ease-in-out z-1">
                <h1 className="font-inter font-[700] text-2xl  pt-10 text-center">{cafe.titulo}</h1>
                <h3 className="text-center text-sm pb-10">{cafe.direccion}</h3>
                <div className="flex flex-row justify-between"> <h3>{cafe.fecha}</h3>
                    {cafe.audio &&
                        <img src="/imagenes/audio.svg" className="h-5 cursor-pointer" onClick={start}></img>}
                </div>


                <hr />
                <div className="flex flex-row justify-between pb-5">
                    <h3 className="text-left text-md font-[600] tracking-wider">Review de Café</h3>
                    <h3 className="text-right text-md font-[600] tracking-wider ">Precio</h3>
                </div>

                {/*Usa Object.entries() para iterar sobre las claves y valores del objeto orden: */}

                {Object.entries(cafe.orden).map(([key, orden]) => (
                    <div key={key} className="pb-7">
                        <div className="flex flex-row pb-1 justify-between">
                            <h3 className="text-md font-semibold uppercase tracking-widest">{orden.descripcion}</h3>
                            <p className="text-gray-500 tracking-tight text-sm md:mr-4">
                                {orden.precio !== null && orden.precio !== undefined ? `$${orden.precio}` : 'null'}
                            </p>

                        </div>
                        <h3 className="text-sm">{orden.review}</h3>
                    </div>

                ))}

                <h1 className="text-center">*******renirenaa********</h1>

                <div className="flex justify-center mt-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="60"
                        viewBox="0 0 200 60"
                    >
                        <rect x="0" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="6" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="10" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="15" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="20" y="0" width="6" height="60" fill="#1f2937" />
                        <rect x="28" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="33" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="37" y="0" width="5" height="60" fill="#1f2937" />
                        <rect x="44" y="0" width="1" height="60" fill="#1f2937" />
                        <rect x="48" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="54" y="0" width="6" height="60" fill="#1f2937" />
                        <rect x="62" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="67" y="0" width="5" height="60" fill="#1f2937" />
                        <rect x="74" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="78" y="0" width="6" height="60" fill="#1f2937" />
                        <rect x="86" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="92" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="96" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="101" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="109" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="115" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="119" y="0" width="5" height="60" fill="#1f2937" />
                        <rect x="126" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="131" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="137" y="0" width="6" height="60" fill="#1f2937" />
                        <rect x="145" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="150" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="154" y="0" width="5" height="60" fill="#1f2937" />
                        <rect x="161" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="167" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="175" y="0" width="3" height="60" fill="#1f2937" />
                        <rect x="180" y="0" width="4" height="60" fill="#1f2937" />
                        <rect x="186" y="0" width="2" height="60" fill="#1f2937" />
                        <rect x="190" y="0" width="6" height="60" fill="#1f2937" />
                    </svg>
                </div>




            </div>

            
                  {cafe.imagenes?.[1] && (
                <div className=" lg:flex hidden bg-gradient-to-t from-[#f5f5f5] to-[#FFFFFF] h-110 w-90 mb-5  justify-center -rotate-10 absolute right-1/6 -z-0 top-72 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:z-10 border-1 border-gray-100">
                    <img src={cafe.imagenes[1]} className="h-90 p-4"></img>
                </div>
                  )}

                   {cafe.imagenes && (
                  <div className=" lg:hidden block"> 
                    {Object.entries(cafe.imagenes).map(([key, orden]) => (
                    <div key={key} className="bg-white h-110 w-90 mb-5 flex justify-center">
                        <img src={orden} className="h-90 p-4"></img>
                    </div>
                ))}</div>)}



        </div>

    )
}

/** <div className="rotate-6"> 
                    {Object.entries(cafe.imagenes).map(([key, orden]) => (
                    <div key={key} className="bg-white h-110 w-90 mb-5 flex justify-center">
                        <img src={cafe.imagenes[0]} className="h-90 p-4"></img>
                    </div>
                ))}</div> */