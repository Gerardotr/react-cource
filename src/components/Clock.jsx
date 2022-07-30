
import React, { Component } from "react";
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date().toLocaleTimeString() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date().toLocaleTimeString() })
    }


    render() {
        return (

            <h1>{this.state.date}</h1>
        );
    }
}

export default Clock;