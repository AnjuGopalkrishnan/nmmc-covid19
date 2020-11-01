import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

class Hotspots extends Component {
  render() {
    
    return (
      <Accordion defaultActiveKey="0">
      <h5 style={{padding:"20px", textAlign: "-webkit-center"}}>2 Containment zones under Lockdown from 29th October, 2020 to 30th November, 2020</h5>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      SEAWOODS
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <ul>Bhakti Avenue,, Sector 46A, Seawoods</ul>
          <ul>Sai Dham Society, Sector 48, Seawoods</ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    );
  }
}

export default Hotspots;