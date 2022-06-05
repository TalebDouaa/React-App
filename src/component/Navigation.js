import React, { Component, Container, Row,Col } from 'react'
import {Link} from 'react-router-dom'
class Navigation extends Component {
import 
    render() {
        return (
            <div>


<header id="header" className="fixed-top ">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><a href='/'>AraSarcastic</a></h1>
    
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
    
        <li className="dropdown"><a href="#"><span>Our Models</span> <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><a href="/TestPage">AraBert</a></li>
            <li><a href="#">CamulBert</a></li>
            <li className="dropdown"><a href="#"><span>Deep Learning Models</span> <i className="bi bi-chevron-right" /></a>
              <ul>
                <li><a href="#">LSTM</a></li>
                <li><a href="#">BiLSTM</a></li>
                <li><a href="#">GRU</a></li>
                <li><a href="#">CNN</a></li>
                <li><a href="#">CNN-BiLSTM</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="/StatisticPage">Statistic</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#team">Team</a></li>
        
        <li><a className="getstarted scrollto" href="/TestPage">Get Started</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  </div>
</header>



            </div>
        )
    }
}

export default Navigation