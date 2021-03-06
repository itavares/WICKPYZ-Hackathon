

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
            zoomEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            height: 500, 
            title:{
                text: "Comparison of drugs 1 and 2",
                fontFamily: "Arial",
            },
            axisY: {
                title: "Overall Score",
                includeZero: true,
                suffix: ""
            },
            axisX: {
                title: "Number of days",
                prefix: "",
                interval: 1
            },
            data: [{
                type: "line",
                showInLegend: true,
                name: "Prozac",
		        markerType: "square",
                toolTipContent: "Day - {x}: {y}%",
                dataPoints: [
                    { x: 0, y: 7.5 },
                    { x: 1, y: 3.4 },
                    { x: 2, y: 6.8 },
                    { x: 3, y: 12.2 },
                    { x: 5, y: 8.9 },
                    { x: 6, y: 10.3 },
                    { x: 7, y: 7.4 },
                    { x: 8, y: 8.4 },
                    { x: 9, y: 6.6},
                    { x: 10, y: 8.3},
                    { x: 11, y: 9.7},
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "Zoloft",
		        markerType: "square",
                toolTipContent: "Day - {x}: {y}%",
                dataPoints: [
                    { x: 0, y: 9.3 },
                    { x: 1, y: 6.2 },
                    { x: 2, y: 6.8 },
                    { x: 3, y: 4.5 },
                    { x: 4, y: 5.9 },
                    { x: 5, y: 4.2 },
                    { x: 6, y: 4.0 },
                    { x: 7, y: 3.4 },
                    { x: 8, y: 3.5},
                    { x: 9, y: 3.0},
                    { x: 10, y: 3.3},
                    // { x: 1, y:3.0}
                    
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