import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [times,setTimes] = useState(0);

  // No Dependency
 /*   useEffect(() =>{
    console.log("I am no dependency useEffect");
  });*/

  // Empty Dependencies Array
 /*   useEffect(() =>{
    console.log("I am empty dependencies array");
  },[times]);*/

  // on Mount cleanup code
/*  useEffect(() =>{
    console.log("Mounted");
    return () => console.log("Un-Mounted")
  },[]);*/

  // Re-render cleanup code
 /* useEffect(() =>{
    console.log("Re-render");
    return () => console.log("Re-render cleanup code")
  });*/

  // State counter cleanup code
 /* useEffect(() =>{
    console.log("I am state counter cleanup code");
    return () => console.log("State counter cleanup")
  },[times]);*/

  useEffect(() =>{
    const random = Math.floor(Math.random()*1000);
    const timer = setInterval(() =>{
      console.log(`${random} - Re-render`);
    },1000);
    return () => clearInterval(timer)
  })

  return (
    <>
     <h3>Count:{count}</h3>
     <h3>Times:{times}</h3>
     <button onClick={() => setCount((value) => value +  1)}>+</button>
     <button onClick={() => setCount((value) => value -  1)}>-</button>
     <button onClick={() => setTimes((value) => value +  1)}>T</button>
    </>
  )
}

export default App
