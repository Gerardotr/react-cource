import React, { Component } from "react";

class ClassExample extends Component {
    constructor(props) {
        super(props);
        this.state = { otherNumber: 4 }
    }

    //state= {number: 5}

    render() {
        const { number, name } = this.props
        return (
            <h1>{name} {number}</h1>
        );
    }
}

export default ClassExample;