

import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            entries:[],
            dataToDisplay: [],
        })
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
                showInLegend: true,
                name: "Prozac",
		        markerType: "square",
                toolTipContent: "Day - {x}: {y}%",
                dataPoints: [
                    { x: new Date(2017, 1, 1), y: 7.5 },
                    { x: new Date(2017, 1, 2), y: 3.4 },
                    { x: new Date(2017, 1, 3), y: 6.8 },
                    { x: new Date(2017, 1, 4), y: 12.2 },
                    { x: new Date(2017, 1, 5), y: 8.9 },
                    { x: new Date(2017, 1, 6), y: 10.3 },
                    { x: new Date(2017, 1, 7), y: 7.4 },
                    { x: new Date(2017, 1, 8), y: 8.4 },
                    { x: new Date(2017, 1, 9), y: 6.6},
                    { x: new Date(2017, 1, 10), y: 8.3},
                    { x: new Date(2017, 1, 11), y: 9.7},
                    { x: new Date(2017, 1, 12), y: 10.9}
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "Zoloft",
		        markerType: "square",
                toolTipContent: "Day - {x}: {y}%",
                dataPoints: [
                    { x: new Date(2017, 2, 1), y: 9.3 },
                    { x: new Date(2017, 2, 2), y: 6.2 },
                    { x: new Date(2017, 2, 3), y: 6.8 },
                    { x: new Date(2017, 2, 4), y: 4.5 },
                    { x: new Date(2017, 2, 5), y: 5.9 },
                    { x: new Date(2017, 2, 6), y: 4.2 },
                    { x: new Date(2017, 2, 7), y: 4.0 },
                    { x: new Date(2017, 2, 8), y: 3.4 },
                    { x: new Date(2017, 2, 9), y: 3.5},
                    { x: new Date(2017, 2, 10), y: 3.0},
                    { x: new Date(2017, 2, 11), y: 3.3},
                    { x: new Date(2017, 2, 12), y:3.0}
                    
                ]
            }
                ]
        }
        
        return (
        <div>
            {/* <h1>Data from last 3</h1> */}
            <CanvasJSChart options = {options} 
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        );
    }
}
export default Graph; 