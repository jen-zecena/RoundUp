import React, { Component } from 'react';
import { getEventAction } from '../actions/eventActions';
import { getEventsByTimeAction } from '../actions/eventActions';



export default class AllEvents extends Component {
    constructor(props){
        super(props);
            this.state = {
                posts:[]
            }
        };
    componentWillMount(){
    //    getEventsByTimeAction("2020-08-03 14:55:10.888","2024-08-03 14:55:10.888"); 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data => this.setState({posts:data}));
    
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Events</h1>
                {postItems}
            </div>
        )
    }
}
