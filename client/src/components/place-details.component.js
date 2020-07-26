import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import PieChartCustom from './Piechart.component';

export default class SummaryData extends Component {
  constructor(props) {
    super(props);
  }
  
  getFormattedDate(d) {
    var date = new Date(d);
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();
    return day + "-" + month + "-" + year;
  }

  renderTableData() {
    if (this.props.caseList) {
      return this.props.caseList[0].placesCount.map((placeData, index) => {
        const { placeName, Recovered, Positive } = placeData //destructuring
        return (
          <tr key={index + 1}>
            <td></td>
            <td>{placeName}</td>
            <td>{Recovered}</td>
            <td>{Positive}</td>
          </tr>
        )
      })
    }
  }

  render() {
    let totalRecovered = 0;
    let totalPositive = 0;
    if (this.props.caseList) {
      this.props.caseList[0].placesCount.forEach(element => {

        totalRecovered = totalRecovered + element.Recovered;
        totalPositive = totalPositive + element.Positive;

      });
    }
    return (
      <div>
        <p align="center"><b><i class="fa fa-calendar" aria-hidden="true"></i>  Daily cases ({this.props.caseList ? this.getFormattedDate(this.props.caseList[0].date) : ""})</b> </p>

        <Table responsive borderless striped hover>
          <thead>
            <tr>
              <th></th>
              <th>Place</th>
              <th>Recovered</th>
              <th>Positive</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
            <tr>
              <td></td>
              <td><b>TOTAL</b></td>
              <td><b>{totalRecovered}</b></td>
              <td><b>{totalPositive}</b></td>
            </tr>
          </tbody>



        </Table>

        {this.props.totals ?
          <div style={{overflow: "auto"}}>
            <PieChartCustom totals={this.props.totals} />
          </div>
          : <div />}
      </div>
    )
  }
}