import React, { Component } from 'react'
import Comment from './Comment'

export default class Post extends Component {
	state = {
		comments: ["comment one", "comment two", "comment three", "comment four"]
	}
    render() {
    	const commentsComposed = this.state.comments.map((item, index)=>(
    		<Comment comment={item} key={index}  />
    	))
        return (
        	<div className ="Post">
        		<h1>{this.props.title}</h1>
        		<p>By {this.props.author}</p>
        		<div>
        			<p>{this.props.body}</p>
        		</div>
        		<h3>Comments:</h3>
        		<ul>
        		{commentsComposed}
        		</ul>
        		
        		
        	</div>
        )
    }
}