import React, { Component } from 'react'

class Event2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    handleClick = (e,msg) => {
        console.log(msg)
        console.log(e)
    }
    render() {
        return (
            <>
                <h1>Events</h1>
                <button onClick={(e) => this.handleClick(e,'Hola Mundo')}>Click me!</button>

            </>

        );
    }
}

export default Event2;