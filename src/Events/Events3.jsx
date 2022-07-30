import React, { Component } from 'react'

class Event3 extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    handleClick(msg, name, e) {
        console.log(msg)
        console.log(name)
        console.log(e)
    }
    render() {
        return (
            <>
                <h1>Events</h1>
                <button onClick={this.handleClick.bind(this, 'Hola Mundo', 'Gerardo')}>Click me!</button>

            </>

        );
    }
}

export default Event3;