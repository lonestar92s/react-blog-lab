import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import Comment from './Comment'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Post
        title='this is a title'
        author='this is an author'
        body='this is a body'
        comments='this is a comment'
        />

        <Comment
        comments='this is a comment'/>
       </div> 
    




      )
  }
}     

