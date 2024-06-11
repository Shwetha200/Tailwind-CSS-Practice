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
   <><div>
      {/* <div className="bg-orange-500 w-full h-56 sm:bg-red-400 md:bg-green-700 lg:bg-cyan-400 xl:bg-violet-600">
     <h1 className="text-white">Hai I'm shwetha</h1>
     <div className="flex flex-col md:flex-row bg-amber-200">
      <div className="text-black flex md:flex-row w-full justify-center items-center">Moodbidri</div>
      <div className="text-black flex flex-col w-full justify-center items-center">Mangalore</div>
     </div>
    </div> */}
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)} >Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>   
   </div>
   </>
  );
}

export default App;
