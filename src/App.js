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
