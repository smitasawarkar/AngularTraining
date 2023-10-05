import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact1.jsx"
import About from "./Components/About.jsx";
import Users from "./Components/Users.jsx";
import Employee from "./Components/Employee.jsx";
import Inventory from "./Components/Inventory.jsx";

class App extends React.Component {
    render(){
        return (<div>
            <h1>React Router Example</h1>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/employee">Employee</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/employee" component={Employee}/>
                    <Route path="/inventory" component={Inventory}/>
                </Switch>
            </Router>
        </div>)
    }
}

export default App;