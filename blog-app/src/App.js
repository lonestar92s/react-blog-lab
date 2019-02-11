import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import Comment from './Comment'

export default class App extends Component {
   state = {
    title : 'Help Computer',
    author : 'Klem Bradly',
    body : 'this is a body of my post. It is rather un-eventful since i am a computer.'
  }

  handleClick = (event) => {
    let newPost = prompt('Type the new Post here')
    this.setState({
        body : newPost
    })
  }

  render() {
    return (
      <div className="App">
        <Post
        title={this.state.title}
        author={this.state.author}
        body={this.state.body}
        />
     
        <button onClick={this.handleClick}>Edit</button>
       </div> 
    




      )
  }
}     

