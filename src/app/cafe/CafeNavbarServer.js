
import path from "path";
import CafeNavbar from "./CafeNavbar";
import CafeMenu from "./CafeMenu";
import { promises as fs } from 'fs';

export default async function CafeNavbarServer(){
    const filePath = path.join(process.cwd(), 'src/data/cafes_mexico.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data= JSON.parse(file);

     

    return <CafeNavbar data={data}/>
   
    

   
}