import React, { Component, Fragment } from "react";
import Header from './Header';

class Lifecycle2 extends Component {
    constructor(props) {
        super(props);
        this.state = { post: {}, id: 1 }
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
    async componentDidUpdate(prevProps, prevState) {
        console.log(prevState.id, this.state.id)
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
                    <Header title='LifeCycle' />
                    <hr />

                    <div>
                        {
                            <>

                                <h2>Post con id {this.state.id}</h2>

                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <hr />

                                <button onClick={this.handleId}>Next post</button>


                            </>

                        }
                    </div>
                </>

            );
        } else return null

    }
}

export default Lifecycle2;