import React from "react";
import Employee from "./Employee.jsx";
import data from "./data.json";

// const EmpRec=[
//     {
//         empId:101,
//         name:"smita",
//         salary:700000
//     },
//     {
//         empId:102,
//         name:"Sakshi",
//         salary:900000
//     },
//     {
//         empId:103,
//         name:"Amrita",
//         salary:200000
//     }
// ]

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            "appname":this.props.app,
            "message":this.props.msg,
            "empData":data,
        }
    }

    displayMessage(){
        this.setState({message:"REACT"})
    }

    render(){
        return(<div>
            <h1>{this.state.appname}</h1>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.displayMessage()}>Display Message</button>

            {/* here we manually write data

            <Employee empId="101" name="Eshan" salary="10000"></Employee>
            <Employee empId="102" name="Plaksha" salary="20000"></Employee>
             */}



{/* here we call the array 
            <Employee record={EmpRec}></Employee> */}
            
{/* here we fetch data from data.json file */}
            <Employee record={this.state.empData}></Employee>
        </div>)
    }
}

export default App