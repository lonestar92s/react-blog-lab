import React, { Component } from 'react'
import Comment from './Comment'

export default class Post extends Component {
    render() {
        return (
        	<div className ="Post">
        		<h1>{this.props.title}</h1>
        		<p>By {this.props.author}</p>
        		<div>
        			<p>{this.props.body}</p>
        		</div>
        		<h3>Comments:</h3>
        		<Comment body={this.props.comments}   />
        		
        	</div>
        )
    }
}