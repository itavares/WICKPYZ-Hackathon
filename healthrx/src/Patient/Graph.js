

import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Graph extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title:{
                text: "Scores from last 30 days"
            },
            axisY: {
                title: "Overall Score",
                includeZero: false,
                suffix: ""
            },
            axisX: {
                title: "Date",
                prefix: "",
                interval: 2
            },
            data: [{
                type: "line",
                toolTipContent: "Day - {x}: {y}%",
                dataPoints: [
                    { x: new Date(2017, 0, 1), y: 120 },
                    { x: new Date(2017, 1, 1), y: 135 },
                    { x: new Date(2017, 2, 1), y: 144 },
                    { x: new Date(2017, 3, 1), y: 103 },
                    { x: new Date(2017, 4, 1), y: 93 },
                    { x: new Date(2017, 5, 1), y: 129 },
                    { x: new Date(2017, 6, 1), y: 143 },
                    { x: new Date(2017, 7, 1), y: 156 },
                    { x: new Date(2017, 8, 1), y: 122 },
                    { x: new Date(2017, 9, 1), y: 106 },
                    { x: new Date(2017, 10, 1), y: 137 },
                    { x: new Date(2017, 11, 1), y: 142 }
                ]
            }]
        }
        
        return (
        <div>
            <h1>React Line Chart</h1>
            <CanvasJSChart options = {options} 
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        );
    }
}
export default Graph; 