import React from 'react';
import Content from './Content';
class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0
      }
   };

   shouldComponentUpdate(){
    console.log('Counter : should component update is called')
    return true;
   }

   componentWillUpdate(){
    console.log('Counter : ComponentWillUpdate is called')
   }

   componentDidUpdate(){
    console.log('Counter :  ComponentDidUpdate is called')
   }
   setNewNumber() {
      this.setState({count: this.state.count + 1})
   }

   render() {
    console.log("Counter: render is called")
      return (
         <div>
            <button onClick = {()=>this.setNewNumber()}>INCREMENT</button>
            <Content myNumber = {this.state.count}></Content>
         </div>
      );
   }
}


export default Counter