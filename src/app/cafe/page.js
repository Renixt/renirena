import Navbar from "../components/Navbar";
import CafeNavbarServer from "./CafeNavbarServer";

export default  function Cafe(){
 
    return(
        <div className='w-full h-screen bg-gradient-to-bl from-[#f6dfb2] to-[#FFFFFF]'>
              <Navbar/>
              <div className="ml-30">
                <CafeNavbarServer/>
                
                </div>
             

            
        </div>
      
     
    )
}