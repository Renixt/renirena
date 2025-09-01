"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function CafeNavbar({ data }) {


    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative w-64 md:ml-20 z-10'>
            <div>
                <button onClick={toggleNavbar}> <img src="/imagenes/cafe3.png" className=" h-10 md:h-30 hover:scale-107 transition-transform duration-300 ease-in-out hover:cursor-pointer"></img></button>
            </div>

           { isOpen&& (
                <div className='text-sm md:text-3xl'>
                    {data.map((data, key) => {
                        return (<div  key={key} className='mb-2 md:mb-4'>
                            <Link className="font-mansalva hover:text-[#A54E1A] hover:text-4xl text-[#7A370E] cursor-pointer transition-discrete duration-300 ease-in-out" href={`/cafe/${encodeURIComponent(data.slug)}`}>{data.titulo}</Link></div>) ;
                    })}
                </div>)}
         
        </div>
    );
}

 /*  
                
                
                
                 <div className={`origin-top-right overflow-hidden transition-transform duration-600 ease-in-out ${isOpen ? 'scale-y-100 ' : 'scale-y-0 '}`}>
                <nav>
                    {data.map((data, key) => {
                        return (<div  key={key} className=' mb-4'>
                            <Link className=" text-3xl font-mansalva hover:text-[#A54E1A] hover:text-4xl text-[#7A370E] cursor-pointer transition-discrete duration-300 ease-in-out" href={`/cafe/${encodeURIComponent(data.slug)}`}>{data.titulo}</Link></div>) ;
                    })}
                </nav>
            </div>
*/
