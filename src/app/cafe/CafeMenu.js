"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function CafeMenu({ data }) {



    return (
        <div className='z-10  lg:mr-50 lg:ml-50 '>
         

           
                <div className='flex flex-row  flex-wrap items-center justify-center gap-5'>
                    {data.map((data, key) => {
                        return (<div  key={key} className='text-center mr-7 md:mr-15 mb-5'>
                            <Link className="font-inter font-bold hover:text-[#552811] hover:tracking-widest hover:cursor-pointer text-[#a25b2e] cursor-pointer transition-discrete duration-300 ease-in-out " 
                            href={`/cafe/${encodeURIComponent(data.slug)}`}>
                                <img src={data.miniatura} className='"w-[110px] h-[110px] md:w-[200px] md:h-[200px]   hover:scale-104 hover:-rotate-1  transition-transform duration-500 ease-in-out cursor-pointer'></img>
                                <p className='mt-2'>{data.titulo}</p>
                            </Link></div>) ;
                    })}
                </div>
         
        </div>
    );
}

//hover:scale-104 hover:-rotate-5