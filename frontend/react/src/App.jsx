//  const App = () => {

// const[count,setCount]=useState(0);
// const increase=()=>{
//   if(count<10){
//   setCount(count+1)
//   }
// }
// const decrease=()=>{
//   if(count>0){
//   setCount(count-1)
//   }
// }

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increase} >Increase</button>
//     <button onClick={decrease} >Decrease</button>
    
//     </>
//   )
// }
// export default App;
import {BrowserRouter,Route,Routes}from "react-router-dom"
import { Home } from "./page/Home";
import About from "./page/about";
import Contact from "./page/Contact";
import Navbar from "./page/Navbar";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Navbar/>}/>


  </Routes>
</BrowserRouter>
    </>
  )
}
export default App;