import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
        	<div className ="Post">
        		<p>
        		{this.props.body}
        		</p>
        	</div>
        )
    }
}