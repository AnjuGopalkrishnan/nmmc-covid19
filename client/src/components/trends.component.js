import React, { Component } from 'react';
import LineChart from './linechart.component';
import axios from 'axios';
import MapComponent from "./map.component";
import PieChartCustom from './Piechart.component';

export default class Trends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyTotal: '',
            caseList: '',
            totls: ''
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
                    <div style={{ width: "70%", marginLeft: "5%" }} ><font size="1" color={'#17a2b8'}>Positive cases trend</font> <LineChart data={data} color={'#17a2b8'} /></div>
                    <div style={{ width: "70%", marginLeft: "5%" }} ><font size="1" color={'#28a745'}>Recovery trend</font><LineChart data={data1} color={'#28a745'} /></div>
                    {this.state.totals ?
                        <div style={{ overflow: "auto" }}>
                            <PieChartCustom totals={this.state.totals} />
                        </div>
                        : <div />}
                </div>
                <div class="col-md-6"> <MapComponent caseList={this.state.caseList ? this.state.caseList[0].placesCount : ""} />
                </div>
            </div>
        );
    }
}