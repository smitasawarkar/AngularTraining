import React from 'react';

import listemployee from '../model/Employee.json'

 

class Employee extends React.Component {

    constructor(props){

        super(props);

        this.state={

         empdata : listemployee

        };

    }

 

    render(){

        return(<div>

           <h1>Employee Component</h1>

           <ul>

                    {this.state.empdata.map((rec) => (

                        <li key={rec.empId}>

                            {rec.empId}: {rec.name}: {rec.salary}

                        </li>

                    ))}

                    </ul>

        </div>)

    }

}

export default Employee