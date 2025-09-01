"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function CafeMenu({ data }) {



    return (
        <div className='z-10 md:w-1/2'>
         

           
                <div className='flex flex-row  flex-wrap items-center justify-center gap-5'>
                    {data.map((data, key) => {
                        return (<div  key={key} className='text-center mr-7 md:mr-15 mb-5'>
                            <Link className="font-inter md:font-bold hover:text-[#552811]  hover:tracking-widest text-[#a25b2e] cursor-pointer transition-discrete duration-300 ease-in-out " 
                            href={`/cafe/${encodeURIComponent(data.slug)}`}>
                                <img src={data.miniatura} className='h-30 md:h-50  transition-transform duration-200 ease-in-out cursor-pointer'></img>
                                <p className='mt-2'>{data.titulo}</p>
                            </Link></div>) ;
                    })}
                </div>
         
        </div>
    );
}

//hover:scale-104 hover:-rotate-5