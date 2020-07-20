import React, { Component } from 'react';
import LineChart from './linechart.component';

export default class Trends extends Component {
    render() {
        var data = [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }];
        var data1 = [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }];

        if (this.props.dailyTotal) {
            data = [];
            data1 = [];
            this.props.dailyTotal.forEach(function (element, index) {
                var positive = JSON.parse('{ "x":' + index + ', "y":' + element.dailytotalPosiive + '}');
                var recovered = JSON.parse('{ "x":' + index + ', "y":' + element.dailytotalRecovered + '}');
                data.push(positive);
                data1.push(recovered);
            })
        }
        return (
            <div style={{ display: "flex" }}>
                <div style={{ width: "70%", marginLeft: "5%" }} ><font size="1" color={'#17a2b8'}>Positive cases trend</font> <LineChart data={data} color={'#17a2b8'} /></div>
                <div style={{ width: "70%", marginLeft: "5%" }} ><font size="1" color={'#28a745'}>Recovery trend</font><LineChart data={data1} color={'#28a745'} /></div>
            </div>
        );
    }
}