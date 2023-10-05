import React from "react";

class Content extends React.Component {
    
componentWillMount() {
    console.log('Content: Component WILL MOUNT!')
 }

 componentDidMount() {
    console.log('Content:  Component DID MOUNT!')
 }

 componentWillReceiveProps(newProps) {    
    console.log(' Content: Component WILL RECIEVE PROPS!')
 }

 shouldComponentUpdate(newProps, newState) {
    console.log("Content: shouldComponentUpdate is called")
    return true;
 }

 componentWillUpdate(nextProps, nextState) {
    console.log('Content:  Component WILL UPDATE!');
 }

 componentDidUpdate(prevProps, prevState) {
    console.log('Content: Component DID UPDATE!')
 }

 componentWillUnmount() {
    console.log('Content: Component WILL UNMOUNT!')
 }

    render() {
        console.log("Content: render is called")
        return (<div>
            <h1>{this.props.myNumber}</h1>
        </div>)
    }
}

export default Content;