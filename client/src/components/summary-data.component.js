import React, { Component } from 'react';
import TotalCases from './total-cases.component';
import PlaceDetails from './place-details.component';
import axios from 'axios';
import countapi from 'countapi-js';
import PlacewiseTotals from './placewise-totals.component';
import Info from './info.component';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

countapi.hit('covidnmc.herokuapp.com', 'visit').then((result) => {
  const hits = {
    hits: result.value
  }
  axios.post('/cases/hits', hits)
    .then(res => {
      console.log("done")
    })
    .catch((error) => {
      console.log(error);
    });
});

export default class SummaryData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dailyTotal: '',
      caseList: '',
      totals: ''
    }
  }

  componentDidMount() {

    axios.get('/cases/totalDaily')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            dailyTotal: response.data
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('/cases/today')
      .then(response => {
        this.setState({
          caseList: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });

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
    return (
      <div class="modal-body row" >
        <div class="col-md-6">
          <TotalCases icon="" count="" name="Total Positive" totals={this.state.totals}/>
          <br />
        </div>
        <div class="col-md-6">
          <br/>
          <Info caseList={this.state.caseList ? this.state.caseList : ""} dailyRise={this.state.dailyTotal}/>
        </div>
        <div class="col-md-12">
          <PlacewiseTotals caseList={this.state.caseList ? this.state.caseList : ""} />
        </div>

        <br/>
        <div class="col-md-6" style={{ padding: "10px" }}>
          <Link to='/hospitals'>
            <Button variant="success" style={{ width: "100%", padding: "10px" }}>Click to view Health facilities</Button>
          </Link>
        </div>
        <div class="col-md-6" style={{ padding: "10px" }}>
          <Link to='/hotspots'>
            <Button variant="danger" style={{ width: "100%", padding: "10px" }}>Click to view Containment zones</Button>
          </Link>
        </div>
        <div class="col-md-6" style={{ padding: "10px" }}>
          <Link to='/trends'>
            <Button variant="info" style={{ width: "100%", padding: "10px" }}>Click for Trends and Analysis</Button>
          </Link>
        </div>
        <div class="col-md-6" style={{ padding: "10px" }}>
          <Link to='/about'>
            <Button variant="secondary" style={{ width: "100%", padding: "10px" }}>Contact</Button>
          </Link>
        </div>
      </div>
    )
  }
} 