import React, { Component, Fragment } from "react";
import Clock from "./Clock";
import Header from './Header';

class Lifecycle3 extends Component {
    constructor(props) {
        super(props);
        this.state = { post: {}, id: 1, message: 'LifeCycle', showClock: true }
        // Event  Bindear eventos 
        console.log('Constructor')
    }
    state = {}
    async componentDidMount() {
        // Peticiones http 
        //fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data))
        const { id } = this.state
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json()
        // Asignacion de eventos 
        this.setState({ post: data })
        // Actulizacion del estado

        window.addEventListener('scroll', () => console.log('Scroll'))
    }
    handleId = () => {
        this.setState({ id: this.state.id + 1 })

    }
    handleMessage = () => {
        this.setState({ message: 'LifeCycle changed' })
    }

    handleUpdate = () => {
        // User las menores veces posibles (nunca)
        this.forceUpdate()
    }

    handleClock = () => {

        this.setState({ showClock: !this.state.showClock })

    }
    async componentDidUpdate(prevProps, prevState) {
        //console.log(prevState.id, this.state.id)
        console.log('Update')
        if (prevState.id !== this.state.id) {
            const { id } = this.state
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json()
            this.setState({ post: data })
        }

        console.log('Update')
    }
    render() {
        console.log('Render')
        // Hacer un setState genera un bucle infinito
        // this.setState({number: 6})
        const { post } = this.state
        if (true) {
            return (
                <>
                    <Header title={this.state.message} />
                    {
                        this.state.showClock && <Clock />
                    }

                    <hr />

                    <div>
                        {
                            <>

                                <h2>Post con id {this.state.id}</h2>

                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <hr />

                                <button onClick={this.handleId}>Next post</button>

                                <button onClick={this.handleMessage}>Change Header</button>

                                <button onClick={this.handleUpdate}>Force update</button>

                                <button onClick={this.handleClock}> {this.state.showClock ? "Hide" : "Show"} clock</button>



                            </>

                        }
                    </div>
                </>

            );
        } else return null

    }
}

export default Lifecycle3;