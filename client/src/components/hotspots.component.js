import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

class Hotspots extends Component {
  render() {
    
    return (
      <Accordion defaultActiveKey="0">
      <h5 style={{padding:"20px", textAlign: "-webkit-center"}}>33 Containment zones under Lockdown from 1st Sept, 2020 to 30th Sept, 2020</h5>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      BELAPUR 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <ul>Elora apartment, Sector 11, Plot no 27, CBD Belapur</ul>
          <ul>Chintamani Co-op housing society, Sector 19, 20</ul>
          <ul>Venus corner, Sector 50</ul>
          <ul>Kanchan Tower, Sector 25</ul>
          <ul>Ganesh Apartment, Gaondevi Mandir Raasta, Karwe Gaon</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      NERUL
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <ul>Jai Hind Society, N L B/25, Sector 2</ul>
          <ul>Arunoday Apartment, B10, Sector 10</ul>
          <ul>Vishshanti Apartment, Sector 8</ul>
          <ul>IIPS quarters, Sector 15, Room number 18</ul>
          <ul>Panchratna society, A5, Sector 16</ul>
          <ul>Shramsafalay apartment, Sector 8</ul>
          <ul>Ganesh Krupa Society, Sector 6</ul>
          <ul>Om Shri Ashtavinayak housing society, sector 24</ul>
          <ul>Safal Complex, B6, Sector 19 A</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      JUINAGAR 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
          <ul>Sainiwas, Sector 24, Jui Nagar</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      SANPADA
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
        <ul>Shri Swami Samarth CHS, Sector 1</ul>
        <ul>Paradise CHS, Sector 7</ul>
        <ul>Guneena Society, Sector 16A</ul>
        <ul>Ashwatha Society, Sector 4</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      VASHI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
          <ul>Abhimanyu society, Sector 29</ul>
          <ul>Trishala society plot number 82, Sector 29</ul>
          <ul>Sidhuvinayak Society, Plot no 108, Sector 29</ul>
          <ul>Saurabh Pornima Society, Plot no 57, Sector 29</ul>
          <ul>Vashi Gaon</ul>
          <ul>Shiv Shakti Society, Sector 17</ul>
          <ul>Maharani Co-op housing society, Sector 17</ul>
          <ul>Happy Home Housing Society, sector 26</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
    KOPERKHAIRNE
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <ul>Sagar Co-op housing society, sector 10</ul>
      <ul>Adarsh Co-op housing society. Sector 9</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="6">
    GHANSOLI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="6">
      <Card.Body>
        <ul>Chinchaoli, Ghansoli Gaon</ul>
        <ul>Mhate Aali, Bodhwaadi Parisar</ul>
        <ul>Mariaai Maata mandir parisar</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="7">
    AIROLI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="7">
      <Card.Body>
        <ul>Sector 3, J Group, Airoli</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <small><i class="fa fa-lightbulb-o"/> Click on place name to see hotspot list</small>
</Accordion>
    );
  }
}

export default Hotspots;