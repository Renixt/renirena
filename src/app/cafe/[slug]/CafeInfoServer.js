
import path from "path";
import CafeInfo from "./CafeInfo";
import { promises as fs } from 'fs';

export default async function CafeInfoServer(){
    const filePath = path.join(process.cwd(), 'src/data/cafes_mexico.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data= JSON.parse(file);

     

    return <CafeInfo data={data}/>;
}

/*import path from "path";
import CafeInfo from "./cafeInfo";
import { promises as fs } from 'fs';
import { notFound } from "next/navigation";
import Link from "next/link";

//El uso de generateStaticParams hace que Next pre‑genere cada página (/cafe/<slug>) en el build para mejor rendimiento (SSG).
export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'src/data/cafes_mexico.json');
    const file = await fs.readFile(filePath, 'utf8');
    const cafes = JSON.parse(json).filter(Boolean);   // quita null/undefined
    return cafes
        .filter((c) => c.slug)                         // asegura slug existente
        .map((c) => ({ slug: c.slug }));
}

export default async function CafeInfoServer( ) {

    const filePath = path.join(process.cwd(), 'src/data/cafes_mexico.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
  
    
    return(
        <div className='text-3xl'>
                    {data.map((data, key) => {
                        return (<div  key={key} className=' mb-4'>
                            <Link className="font-mansalva hover:text-[#A54E1A] hover:text-4xl text-[#7A370E] cursor-pointer transition-discrete duration-300 ease-in-out" href={`/cafe/${encodeURIComponent(data.slug)}`}>{data.titulo}</Link></div>) ;
                    })}
                </div>

    )
}

/*const cafe = data.find((c) => c.slug === params.slug);
    if (!cafe) notFound();

    return <CafeInfo data={cafe} />;*/