import React, { Component, Fragment } from "react";
import Header from './Header';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
        // Event  Bindear eventos 
        console.log('Constructor')
    }
    state = {}
    async componentDidMount() {
        // Peticiones http 
        //fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data))
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json()
        // Asignacion de eventos 
        this.setState({ posts: data })
        // Actulizacion del estado

        window.addEventListener('scroll', () => console.log('Scroll'))
    }
    render() {
        console.log('Render')
        // Hacer un setState genera un bucle infinito
        // this.setState({number: 6})
        const { posts } = this.state
        if (true) {
            return (
                <>
                    <Header title='LifeCycle' />
                    <hr />

                    <div>
                        {
                            posts.map(post => {
                                return (
                                    <Fragment key={post.id}>
                                        <h1>{post.title}</h1>
                                        <p>{post.body}</p>
                                        <hr />
                                    </ Fragment>
                                )
                            })

                        }
                    </div>
                </>

            );
        } else return null

    }
}

export default Lifecycle;