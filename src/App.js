import React from 'react';
import Header from './Header.js';
import Container from './Container.js';
import Footer from './Footer.js';
import './App.css';
import Post from './Post.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Container></Container>
      <Post></Post>
      <Footer></Footer>

      </div>
    )
  }
}