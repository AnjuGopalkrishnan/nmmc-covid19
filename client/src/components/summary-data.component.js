import React, { Component } from 'react';
import TotalCases from './total-cases.component';
import PlaceDetails from './place-details.component';
import axios from 'axios';
import Trends from './trends.component';
import countapi from 'countapi-js';
import MapComponent from "./map.component";

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
          <TotalCases icon="" count="" name="Total Positive" totals={this.state.totals} />
          <br />
          <MapComponent caseList={this.state.caseList ? this.state.caseList[0].placesCount : ""} />

        </div>
        <div class="col-md-6">
          <PlaceDetails caseList={this.state.caseList ? this.state.caseList : ""} totals={this.state.totals ? this.state.totals : ""} />

        </div>
        <div style={{ width: "100%" }}>
          <Trends dailyTotal={this.state.dailyTotal} />
        </div>
      </div>
    )
  }
} 