import Navbar from "../components/Navbar";
import CafeNavbarServer from "./CafeNavbarServer";
import CafeMenuServer from "./CafeMenuServer";



export default  function Cafe(){
 
    return(
        <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-[#f6dfb2] to-[#FFFFFF]'>
              <div className="absolute  pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px] "></div>
            <div className="absolute  pointer-events-none bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]"></div>

            
              <Navbar/>
              <div className=" flex flex-col justify-center content-center items-center">
 <CafeMenuServer/>
              </div>
             
              
              
             

            
        </div>
      
     
    )
}

/*<div className="absolute pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px] "></div>
            <div className="absolute  pointer-events-none bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]"></div>
 */