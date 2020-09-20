import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Info extends Component {

  render() {
    let riseToday = 0, recovery = 0, positive = 0, deceased = 0;
    if (this.props.dailyRise) {
      riseToday = this.props.dailyRise.slice(-1);
      recovery = riseToday[0].dailytotalRecovered;
      positive = riseToday[0].dailytotalPosiive;
      deceased = riseToday[0].dailyDeceased;
    }
    return (
      <Table responsive>
        <tbody>
          <tr><td>Total cured and discharged today</td><td><b>{recovery}</b></td></tr>
          <tr><td>Number of registered positive cases today</td><td><b>{positive}</b></td></tr>
          <tr><td>Total deceased today</td><td><b>{deceased}</b></td></tr>
          <tr><td>Recovery Rate</td><td><b>{this.props.totals ? Math.round(this.props.totals[0].totalRecovered / this.props.totals[0].totalPosiive * 100) : 0}%</b></td></tr>
          <tr><td>Deceased Rate</td><td><b>{this.props.totals ? Math.round(this.props.totals[0].totalDeceased / this.props.totals[0].totalPosiive * 100) : 0}%</b></td></tr>
        </tbody>
      </Table>
    );
  }
}