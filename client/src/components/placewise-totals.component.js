import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

export default class PlacewiseTotals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeTotalList: ''
    }
  }

  componentDidMount() {
    axios.get('/cases/placeTotal')
      .then(response => {
        this.setState({
          placeTotalList: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFormattedDate(d) {
    var date = new Date(d);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return day + "-" + month + "-" + year;
  }

  renderTableData() {
    if (this.state.placeTotalList) {
      return this.state.placeTotalList[0].placewiseTotal.map((placeData, index) => {
        const { placeName, totalRecovered, totalPositive, totalDeceased } = placeData //destructuring
        return (
          <tr key={index + 1}>
            <td></td>
            <td>{placeName}</td>
            <td style={{ color: "red" }}>{this.props.caseList ? this.props.caseList[0].placesCount[index].Positive : ""}</td>
            <td style={{ color: "green" }}>{this.props.caseList ? this.props.caseList[0].placesCount[index].Recovered : ""}</td>
            <td>{totalPositive}</td>
            <td>{totalRecovered}</td>
            <td>{totalDeceased}</td>
            <td>{totalPositive - totalRecovered - totalDeceased < 0 ? 0 : totalPositive - totalRecovered - totalDeceased}</td>
          </tr>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <b />
        <p align="center"><b><i class="fa fa-calendar" aria-hidden="true"></i> Navi Mumbai Covid-19 Cases ({this.props.caseList ? this.getFormattedDate(this.props.caseList[0].date) : ""})</b> </p>
        <Table responsive borderless striped hover >
          <thead>
            <tr>
              <th></th>
              <th>Zones</th>
              <th>Cases today</th>
              <th>Recovery today</th>
              <th>Total Cases</th>
              <th>Total Recovered</th>
              <th>Total Deceased</th>
              <th>Total Active</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </Table>
      </div>
    )
  }
}