import React,{useEffect, useState} from "react";

function App(){
    const [count,setCount]=useState(0)

    //It is similar to componentDidMount  and componentDidUpdate
  useEffect(()=>{
    document.title=`You Clicked ${count} times`;
  })

  return(
    <div>
        <p>You clicked {count} times!</p>
        <button onClick={()=>setCount(count+1)}>CLICK ME!</button>


    </div>
  )
}
export default App;