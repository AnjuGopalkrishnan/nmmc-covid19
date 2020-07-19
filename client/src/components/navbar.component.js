import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{"height": "50px"}}>
        <Link to="/" className="navbar-brand">Navi Mumbai Covid19</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Dashboard</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}