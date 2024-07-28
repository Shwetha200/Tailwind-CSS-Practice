import React from "react";
import {useState}  from "react";
function App() {
  const [count, setCount]=useState(0);
  // handleChange=()=>{
  //   setCount=count+1;
  // }
   
  // handle=()=>{
  //   setCount=count-1;
  // }

  

  return (
   <><div className=" h-[100vh] w-full flex justify-center items-center text-center">
      {/* <div className="bg-orange-500 w-full h-56 sm:bg-red-400 md:bg-green-700 lg:bg-cyan-400 xl:bg-violet-600">
     <h1 className="text-white">Hai I'm shwetha</h1>
     <div className="flex flex-col md:flex-row bg-amber-200">
      <div className="text-black flex md:flex-row w-full justify-center items-center">Moodbidri</div>
      <div className="text-black flex flex-col w-full justify-center items-center">Mangalore</div>
     </div>
    </div> */}
    <div >
      <h1 className="font-bold text-black" >{count}</h1>
      <button onClick={()=>setCount(count + 1)} className="font-bold text-black bg-sky-300 border border-black">Increase</button>
      <button onClick={()=>setCount(count-1)} className="font-bold text-black bg-sky-300 border border-black">Decrease</button>   
   </div>
   </div>
   </>
  );
}

export default App;
