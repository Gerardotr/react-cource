import React, { Component } from 'react'

class Event1 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    state = {}
    handleClick() {
        console.log(this)
    }
    render() {
        return (

            <>
                <h1>Events</h1>
                {/* <button onClick={this.handleClick}>Click me!</button> */}
                {/* <button onClick={() => this.handleClick()}>Click me!</button> */}
                {/* <button onClick={this.handleClick.bind(this)}>Click me!</button> */}
                <button onClick={this.handleClick}>Click me!</button>

            </>

        );
    }
}

export default Event1;