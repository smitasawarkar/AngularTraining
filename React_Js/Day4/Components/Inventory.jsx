import React from "react";
import axios from "axios";
class Inventory extends React.Component {
    constructor(props){
        super(props)
        this.state={
            employees:[],
 
        }
    }

    componentDidMount(){
       axios.get("http://localhost:5050/inventory")
       .then(res=>{
           console.log(res.data)
           const employee=res.data;

           this.setState({employees: employee});
       })
    }
    render(){
        return(

            <div>
    <table>
      <td>id</td>
      <td>name</td>
      <td>DOB</td>
      
       {this.state.employees.map((emp,ival)=> 
        (<tr key={ival}>
        <td>{emp.empid}</td>
        <td>{emp.empname} </td>
        <td>{emp.empdob} </td>
        
        </tr>)
        )}
      
  </table>
  <br></br>
            </div>
        );
    }
}

export default Inventory
