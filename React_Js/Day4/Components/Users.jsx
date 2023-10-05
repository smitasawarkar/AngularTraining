

import React from "react"
import axios from 'axios'
import '../Components/Style.css';
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={
            person:[],
            curr:[]
        }
    }

    componentDidMount(){
       axios.get("http://jsonplaceholder.typicode.com/users")
       .then(res=>{
           console.log(res.data)
           const persons=res.data;

           this.setState({person: persons, curr:persons});
       })
        
      // console.log(this.state.person)//
      //console.log(curr);
   //   this.state(curr);

    }
    render(){
        return(

            <div>
    {/* <table>
      <td>id</td>
      <td>name</td>
      <td>username</td>
      <td>mail</td>
      
       {this.state.curr.map((person,ival)=> 
        (<tr key={ival}>
        <td>{person.id}</td>
        <td>{person.name} </td>
        <td>{person.username} </td>
        <td>{person.email}</td>
        </tr>)
        )}
      
  </table> */}
  <table id="customers">

<tr>

    <th>Id</th>

    <th>Name</th>

    <th>UserName</th>
    
     <th>Email</th>

    

</tr>



{this.state.person.map((person,ival)=>

    (<tr key={ival}>

        <td>{person.id}</td>
        <td>{person.name} </td>
        <td>{person.username} </td>
        <td>{person.email}</td>



</tr>))}        



</table>
  <br></br>
            </div>
        );
    }
}

export default Users;