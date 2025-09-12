"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // App Router
import Navbar from "./components/Navbar";

export default function Home() {
  const router = useRouter();
  const cafeAudio = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      cafeAudio.current = new Audio("/sonidos/gulp.mp3");
    }
  }, []);

  const start = () => {
    if (cafeAudio.current) {
      cafeAudio.current.play().then(() => {
        setTimeout(() => {
          router.push("/cafe"); // navega después de reproducir
        }, 500); // espera 800ms
      }).catch((err) => {
        console.error("No se pudo reproducir el audio:", err);
        router.push("/cafe"); // en caso de error, navega de todos modos
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-bl from-[#B73E64] to-[#FFD1EB] overflow-hidden">
      <div className="">
        <h1 className="text-3xl md:text-9xl font-inter font-[700] text-white">
          renirenaa
        </h1>
      </div>
      <div className="flex flex-row mt-10 justify-center flex-wrap">
        <button onClick={start}>
          <img
            src="imagenes/coffe1.png"
            className="h-40 md:h-110 hover:scale-104 hover:-rotate-1 transition-transform duration-200 ease-in-out cursor-pointer"
          />
        </button>
        <button onClick={() => router.push("/camarita")}>
          <img
            src="imagenes/camara.png"
            className="h-40 md:h-110 hover:scale-104 hover:rotate-1 transition-transform duration-200 ease-in-out cursor-pointer"
          />
        </button>
      </div>
    </main>
  );
}
