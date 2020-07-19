import React, { Component } from 'react';
import TotalCases from './total-cases.component';
import PlaceDetails from './place-details.component';
import axios from 'axios';
import LineChart from './linechart.component';

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
    var data = [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }];
    var data1 = [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }];

    if (this.state.dailyTotal) {
      data = [];
      data1 = [];
      this.state.dailyTotal.forEach(function (element, index) {
        var positive = JSON.parse('{ "x":' + index + ', "y":' + element.dailytotalPosiive + '}');
        var recovered = JSON.parse('{ "x":' + index + ', "y":' + element.dailytotalRecovered + '}');
        data.push(positive);
        data1.push(recovered);
      })
    }

    return (

      <div class="modal-body row">
        <div class="col-md-6">
          <TotalCases icon="" count="" name="Total Positive" />

          <div style={{ width: "60%", marginLeft: "15%" }} ><font size="1" color={'#17a2b8'}>Confirmed</font> <LineChart data={data} color={'#17a2b8'} /></div>
          <div style={{ width: "60%", marginLeft: "15%" }} ><font size="1" color={'#28a745'}>Recovered</font><LineChart data={data1} color={'#28a745'} /></div>

        </div>
        <div class="col-md-6">
          <PlaceDetails />
        </div>
      </div>

    )
  }
}  