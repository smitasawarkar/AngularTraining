import React from "react";
import './styles/myStyle.css';
const htmlHeader = require("./header.html");
const htmlFooter = require("./footer.html");
class Employee extends React.Component {

    render(){
        return (<div>
           <div dangerouslySetInnerHTML ={{ __html: htmlHeader}}></div>
                <h1>Employee Component </h1>
                {/* <h1>{this.props.empId} : {this.props.name} : {this.props.salary}</h1> */}
               
                {/* print manually
                
                <h1>{this.props.record[0].empId} : {this.props.record[0].name} : {this.props.record[0].salary}</h1>
                <h1>{this.props.record[1].empId} : {this.props.record[1].name} : {this.props.record[1].salary}</h1>
                <h1>{this.props.record[2].empId} : {this.props.record[2].name} : {this.props.record[2].salary}</h1> */}
                


                <ul>
                    {this.props.record.map((rec) =>(
                        
                        //  alert(JSON.stringify(rec.empId))
                         <li key={rec.empId}>
                            {rec.empId}
                             {rec.name}
                             {rec.salary}

                        </li>
                    ))}
                </ul>
                <div dangerouslySetInnerHTML ={{ __html: htmlFooter}}></div>
                </div>)
    }
}

export default Employee