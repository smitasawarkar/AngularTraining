import React from "react"
import { Router, Route, IndexRoute, hashHistory,Link} from 'react-router'

const Home=()=><h1>This is Home component</h1>
const About=()=><h1>This is About component</h1>
const Contact=()=><h1>This is Contact component</h1>
const NotFound=()=><h1>404 Not Found component</h1>

const PuneAddress=()=><h1>Pune Wakad </h1>
const MumbaiAddress=()=><h1>Mumbai Kalyan</h1>
const Address = (props) => <div>
  <br />
  <Link onlyActiveOnIndex activeStyle={{color:'Red'}} to='/address'>Pune address</Link>&nbsp;
  <Link activeStyle={{color:'Red'}} to='/address/mumbai'>Mumbai Address</Link>
  <h1>We are located at Hinjewadi.</h1>
  {props.children}
</div>


const Nav = () => (
    <div>
      <Link onlyActiveOnIndex activeStyle={{color:'red'}}  to='/'>Home</Link>&nbsp;
      <Link activeStyle={{color:'red'}} to='/about'>About</Link>&nbsp;
      <Link activeStyle={{color:'red'}} to='/contact'>Contact</Link>&nbsp;
      <Link activeStyle={{color:'red'}} to='/address'>Address</Link>&nbsp;
      <Link activeStyle={{color:'red'}} to='/users'>User</Link>&nbsp;
    </div>
  )


const Container = (props) => {
console.log(props)
return (<div>
  
  <Nav />
  {props.children}
</div>)
}

  const Users=(props)=>(
    <div>
        <h1>This is users component</h1>
        {props.params.uname}
    </div>
  )
class App extends React.Component {
    render() {
        return (<div>
        <Router history={hashHistory}>

        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='address' component={Address}>
            <IndexRoute component={PuneAddress} />
            <Route path='mumbai' component={MumbaiAddress} />
          </Route>

          <Route path='/users(/:uname)' component={Users} />

          <Route path='*' component={NotFound} />
        </Route>
            
        </Router>
        </div>)
    }
}

export default App;