import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

class Hotspots extends Component {
  render() {
    
    return (
      <Accordion defaultActiveKey="0">
      <h5 style={{padding:"20px", textAlign: "-webkit-center"}}>11 Containment zones under Lockdown from 1st October, 2020 to 31st October, 2020</h5>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      BELAPUR / SEAWOODS
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <ul>Trimurti Sadan, Darave Village, Belapur</ul>
          <ul>Vishal Pride, Plot No. 59, Sector 50, Seawoods</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      NERUL
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
          <ul>Deepsagar Society, Plot no. 25, Sector-19, Nerul</ul>
          <ul>House No. 758 at Sector-20, Nerul Gaon</ul>
          <ul>Shivshakti Apt, 94/7, Sector-10, Nerul</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      SANPADA
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
        <ul>Mahavir Amrut Society, Plot no. 2, Sector-19, Sanpada</ul>
        <ul>Nivara Society, Sector-3, Sanpada</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      VASHI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
          <ul>Vashi gaon, Sector-31, Plotline Shivthar tower, Vashi </ul>
          <ul>Prarthana, Plot no. 48, Sector-28, Vashi</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
    AIROLI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
        <ul>Omkar Society, Sector 10, Airoli</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="6">
    DIGHA
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="6">
      <Card.Body>
        <ul>Dattakrupa (Anubhale Nivas) Apartment, Bindhu Madhav Nagar, Digha</ul>
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