import React,{useEffect, useState} from "react";

import axios from 'axios';

const App=()=>{
  const[users,setUsers]=useState([])
  const[load,setLoad]=useState(false)
  const[error,setError]=useState('')

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setUsers(res.data)
      setLoad(true)
    })
    .catch(err=>{
      setError(err.message)
      setLoad(true)
    })
  });

  if(load){
    return(
    <ul>
      {error?<li>{error}</li>:users.map((record,index)=><li key={index}>{record.name}</li>)}      
    </ul>)
  }
  else
  {
    return(
      <div>
        Loading.........
      </div>
    )

  }
}
export default App;