
import path from "path";
import CafeNavbar from "./cafeNavbar";
import { promises as fs } from 'fs';

export default async function Cafe(){
    const filePath = path.join(process.cwd(), 'src/data/cafes_mexico.json');
    const file = await fs.readFile(filePath, 'utf8');
    const data= JSON.parse(file);

     

    return <CafeNavbar data={data}/>;
}