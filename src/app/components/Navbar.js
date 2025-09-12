export default function Navbar(){
    return(
        <div className="flex flex-row relative z-10"> 
           <a href="/"> <h1 className="text-xl font-inter font-[700] text-white hover:scale-105  p-5 ">renirena</h1></a>
          <div className=" w-full h-15 flex justify-end-safe p-2 flex-row">
       
        <a href="/cafe"> <img src="/imagenes/coffe1.png" className="h-12 hover:scale-107 transition-transform duration-300 ease-in-out hover:cursor-pointer"></img></a>
        <a href="/camarita"> <img src="/imagenes/camara2.png" className="h-10 hover:scale-107 transition-transform duration-300 ease-in-out hover:cursor-pointer rotate-3"></img></a>
     
      <br></br>
        </div>
        </div>
      
    )
}