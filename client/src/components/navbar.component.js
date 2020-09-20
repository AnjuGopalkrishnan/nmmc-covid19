import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class NavbarCustom extends Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Navi Mumbai Covid19</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav borderless" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Dashboard</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/hotspots" className="nav-link">Hotspots</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/hospitals" className="nav-link">Hospitals</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/trends" className="nav-link">Trends</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}