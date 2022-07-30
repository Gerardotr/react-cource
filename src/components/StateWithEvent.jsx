import React, { Component } from "react";
class StateWithEvent extends Component {
    constructor(props) {
        super(props);
    }

    state = { number: this.props.number }

    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
    }
    handleDecrement = () => {
        this.setState({ number: this.state.number - 1 })
    }
    handleReset = () => {
        this.setState({ number: 0 })
    }
    render() {
        return (

            <>
                <h1>Number {this.state.number}</h1>
                <button onClick={this.handleClick}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        );
    }
}

StateWithEvent.defaultProps = {
    number: 0
}

export default StateWithEvent;