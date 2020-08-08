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
    /*let totalRecovered = 0;
    let totalPositive = 0;
    if (this.props.caseList) {
      this.props.caseList[0].placesCount.forEach(element => {

        totalRecovered = totalRecovered + element.Recovered;
        totalPositive = totalPositive + element.Positive;

      });
    }*/
    let riseToday = this.props.dailyRise.slice(-1);

    return (
      <div>
        <p align="center"><b><i class="fa fa-calendar" aria-hidden="true"></i>  Daily cases ({this.props.caseList ? this.getFormattedDate(this.props.caseList[0].date) : ""})</b> </p>
        {riseToday.length > 0 ?
        <Table responsive borderless striped hover >
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
              <td style={{color:"green"}}><b><i class="fa fa-level-up"></i> {riseToday[0].dailytotalRecovered}</b></td>
              <td style={{color:"red"}}><b><i class="fa fa-level-up"></i> {riseToday[0].dailytotalPosiive}</b></td>
            </tr>
            <tr>
              <td></td>
              <td><b>Deceased today</b></td>
              <td colspan="2" style={{color:"gray"}}><b><i class="fa fa-level-up"></i> {riseToday[0].dailyDeceased}</b></td>
            </tr>
          </tbody>
        </Table>
        : <div/>
        }
        {this.props.totals ?
          <div style={{overflow: "auto"}}>
            <PieChartCustom totals={this.props.totals} />
          </div>
          : <div />}
      </div>
    )
  }
}