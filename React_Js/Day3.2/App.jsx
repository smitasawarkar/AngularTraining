import React from 'react';
import Counter from './Counter';
class App extends React.Component {

    // componentWillMount() {
    //     console.log("Component will mount is called")
    // }
    // componentDidMount(){
    //     console.log("Component didMount is called")
    // }

    // componentWillUnmount(){
    //     console.log("Component willUnmount is called")
    // }

    render() {
        // console.log("render is called")
        return (<div>
            <Counter></Counter>
            <h1>App component is called</h1>
        </div>)
    }
}

export default App