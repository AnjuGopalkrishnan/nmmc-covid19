import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

class Hotspots extends Component {
  render() {
    
    return (
      <Accordion defaultActiveKey="0">
      <h5 style={{padding:"20px", textAlign: "-webkit-center"}}>42 Hotspots under Lockdown 6.0 till 31st July, 2020 </h5>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      BELAPUR 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <ul>Sector-14, Diwale Gaon, CBD Belapur</ul>
          <ul>Belapur Gaon Sector 8A</ul>
          <ul>Prajapati care centre, CBD Belapur</ul> 
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      NERUL
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <ul>Karave gaon, Nerul</ul>
          <ul>Sector-23, Darave, Nerul</ul>
          <ul>Sector-48, Nerul</ul>
          <ul>Sector-10, Nerul</ul>
          <ul>A-4, Evergreen CHS, Sector-6, Nerul</ul>
          <ul>E-1, C-4, Nandanvan CHS, Sector-10, Nerul</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      SANPADA
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <ul>Sanpada masala dunk, Sector-5, Sanpada</ul>
<ul>Keshavkunj-1 CHS, Sector 30, Sanpada</ul>
<ul>Millenium tower, Sector-9, Sanpada</ul>
<ul>Dreamland CHS, E-2/02, Sector-4, Sanpada</ul>
<ul>Bhumiraj abode, E-wing, Sector-15, Sanpada</ul>
<ul>Progressive highness CHS, Sector-16A, Sanpada</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      VASHI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <ul>Vighnaharta CHS, 402, 202, Sector-26, Vashi</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      TURBHE
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <ul>Sector-21, Turbhe</ul>
<ul>Sector-22, Turbhe</ul>
<ul>Sector-20, Turbhe</ul>
<ul>Gharat Nivas, Kopari Village, Turbhe</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
    KOPERKHAIRNE
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <ul>Sector-4, Koperkhairne</ul>
<ul>Sector-19, Koperkhairne</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="6">
    GHANSOLI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="6">
      <Card.Body>
      <ul>Datta nagar, Nosil naka, Ghansoli</ul>
<ul>Katkaripada, Jai Bhawani Chawl, Ghansoli</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="7">
    AIROLI
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="7">
      <Card.Body>
      <ul>C-203, Newa Garden, Phase-1, Sector-20, Airoli</ul>
<ul>Jay Omkar CHS, Sector-10, Airoli</ul>
<ul>Jai Bhawani Chawl, Near Patil Decorators, Chhatrapati Chawl, Near Rupesh Kotkar's Office, Airoli</ul>
<ul>Yadav Nagar, near Mothevihiri, Chinchpada, Airoli</ul>
<ul>Ganesh Nagar, Chinchpada, Airoli</ul>
<ul>Devi dham nagar, Chinchpada, Airoli.</ul>
<ul>Samaj Mandir, Ambedkar Statue, Chinchpada, Airoli</ul>
<ul>Yadav Nagar, Prajapati Chawl, Jai Bhawani Chawl, Chinchpada, Airoli</ul>
<ul>Old Chinchpada, Airoli</ul>
<ul>Khushi Apartment, Sainath wadi, Airoli</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="8">
      DIGHA
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="8">
      <Card.Body>
      <ul>Pandhari Nagar, Ilthanpada, Digha</ul>
<ul>Vishnu nagar, Ilthanpada, Digha</ul>
<ul>Ilthanpada, Digha</ul>
<ul>Digha (East)</ul>
<ul>Ram nagar, Ilthanpada, Digha</ul>
<ul>Mahatma Phule nagar, Digha</ul>
<ul>Ganpatipada, Ilthanpada, Digha</ul>
<ul>Subashnagar, Ilthanpada, Digha</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <small><i class="fa fa-lightbulb-o"/>* Click on place name to see hotspot list</small>
</Accordion>
    );
  }
}

export default Hotspots;