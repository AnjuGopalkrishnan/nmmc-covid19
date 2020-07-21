import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap'
import axios from 'axios';
import desceaseIcon from '../icon/skull.png';
import positiveIcon from '../icon/microscope.png';
import recoverIcon from '../icon/shield.png';
import activeIcon from '../icon/first-aid-kit.png';
import PieChartCustom from './Piechart.component';

export default class TotalCaseBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: ''
    }
  }


  componentDidMount() {
    axios.get('/cases/total')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            totals: response.data
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return (
      <div style={{ "font-size": "19px" }}>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div style={{ "font-size": "15px", alignItems:"center" }}><i class="fa fa-clock-o" aria-hidden="true"></i>  Last updated {this.state.totals ? new Date(this.state.totals[0].updatedAt).toLocaleString("en-IN", options) : ""}</div>
        <br />
        <CardDeck style={{display: "flex"}}>
          <Card
            bg='danger'
            text='white'
            style={{ width: '18rem', height: '8rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Confirmed</Card.Header>
            <Card.Body>
              <Card.Title> {this.state.totals ? this.state.totals[0].totalPosiive : ""} <span style={{ float:"right", opacity: 0.9 }}><img src={positiveIcon} /></span> </Card.Title>

            </Card.Body>
          </Card>

          <Card
            bg='success'
            text='white'
            style={{ width: '18rem', height: '8rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Recovered</Card.Header>
            <Card.Body>
              <Card.Title> {this.state.totals ? this.state.totals[0].totalRecovered : ""} <span style={{ float:"right", opacity: 0.9 }}><img src={recoverIcon} /></span>
              </Card.Title>

            </Card.Body>
          </Card>


        </CardDeck>
        <CardDeck style={{display: "flex"}}>
          <Card
            bg='info'
            text='white'
            style={{ width: '18rem', height: '8rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Recovering</Card.Header>
            <Card.Body>
              <Card.Title> {this.state.totals ? this.state.totals[0].totalPosiive - this.state.totals[0].totalRecovered : ""} <span style={{ float:"right", opacity: 0.9 }}><img src={activeIcon} /></span> </Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg='secondary'
            text='white'
            style={{ width: '18rem', height: '8rem', marginRight:"10px" }}
            className="mb-2"
          >
            <Card.Header>Deceased</Card.Header>
            <Card.Body>
              <Card.Title>   {this.state.totals ? this.state.totals[0].totalDeceased : ""} <span style={{ float:"right", opacity: 0.9 }}><img src={desceaseIcon} /></span></Card.Title>

            </Card.Body>
          </Card>
        </CardDeck>
        {this.state.totals ?
          <div style={{overflow: "auto"}}>
            <PieChartCustom totals={this.state.totals} />
          </div>
          : <div />}
      </div>

    )
  }
}