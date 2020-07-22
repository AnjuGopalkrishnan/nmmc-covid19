import React, { Component } from 'react';
import TotalCases from './total-cases.component';
import PlaceDetails from './place-details.component';
import axios from 'axios';
import Trends from './trends.component';
import countapi from 'countapi-js';


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
      dailyTotal: ''
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
      })
  }

  render() {
    return (
      <div class="modal-body row" >
        <div class="col-md-6">
          <TotalCases icon="" count="" name="Total Positive" />
        </div>
        <div class="col-md-6">
          <PlaceDetails />
        </div>
        <div style={{width:"100%"}}>
          <Trends dailyTotal={this.state.dailyTotal}/>
        </div>
      </div>
    )
  }
} 