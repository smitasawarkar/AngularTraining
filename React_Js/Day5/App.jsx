import React,{useState} from "react";

 

 

function App(){

  const[count,setCount]=useState(0)

  console.log(useState(0))

  return(

    <div>

    <p>You clicked {count}</p>

    <button onClick={()=>setCount(count+1)}>INCREMENT </button><br/><br/>
    <button onClick={()=>setCount(count-1)}>DECREMENT</button>
  </div>

  )

}

 

 

 

 

// class App extends React.Component {

 

//     constructor(props) {

//         super(props);

//         this.state={

//             counter:0

//         }

//     }

 

//     increament(){

//         this.setState({counter:this.state.counter+1})

//     }

//     render(){

//         return (

//         <div>

//             <h1>Counter is {this.state.counter}</h1>

//             <button onClick={()=>this.increament()}>INCREMENT</button>

 

//         </div>)

//     }

 

// }

 

export default App;