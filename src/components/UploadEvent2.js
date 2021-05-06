import React, { Component } from 'react';
import { getEventAction } from '../actions/eventActions';
import { getEventsByTimeAction } from '../actions/eventActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEventAction } from '../actions/eventActions';

class UploadEvent2 extends Component {
    constructor(props){
        super(props);
            this.state = {
                title:"",
                body:""
            };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }
    componentWillMount(){
    //    getEventsByTimeAction("2020-08-03 14:55:10.888","2024-08-03 14:55:10.888"); 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data => this.setState({posts:data}));
    
    }

    onSubmit(e){
        e.preventDefault();

        const post={
            title: this.state.title,
            body: this.state.body
        }

        this.props.addEventAction(post);
    }

    render() {
        
        return (
            <div>
                <h1>Add Event</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

UploadEvent2.propTypes = {
    addEventAction: PropTypes.func.isRequired
}

// const mapStateToProps = state => ({
//     posts:state.posts.items,
//     newPost:
// })
export default connect(null,{addEventAction})(UploadEvent2);