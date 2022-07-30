import React, { Component } from 'react'
import { Button } from './Button';

class Event4 extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    handleClick = (e) => {
        console.log(e)
    }
    render() {
        return (
            <>
                <h1>Events</h1>
                <Button text="Click me!" onEventClick={this.handleClick} />
            </>

        );
    }
}

export default Event4;