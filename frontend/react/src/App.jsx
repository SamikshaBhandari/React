 import { useState } from "react";
 const App = () => {

const[count,setCount]=useState(0);
const increase=()=>{
  setCount(count+1)
}
const decrease=()=>{
  setCount(count-1)
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increase} >Increase</button>
    <button onClick={decrease} >Decrease</button>
    
    </>
  )
}
export default App;
