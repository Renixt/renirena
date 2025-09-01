
import path from "path";
import CafeMenu from "./CafeMenu";
import { promises as fs } from 'fs';

export default async function CafeMenuServer(){
    const filePath = path.join(process.cwd(), 'src/data/cafes_mexico.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data= JSON.parse(file);


// console.log("📂 Data desde Cafe.js:", data); // <-- log en el servidor


    return <CafeMenu data={data} />
  
       

}