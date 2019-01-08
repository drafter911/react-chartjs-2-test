import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar'
import Line from './components/Line'

class App extends Component {
    state = {
        labels: ['Crome (Crome)', 'Firefox (Firefox)', 'miscellaneous {misc}', 'Microsoft Edge (MSEdge)', 'Microsoft InternetExplorer (MSIE)', 'Netscape (Netscape)', 'Opera (Opera)', 'Safari (Safari)'],
        datasetsBar: [
            {
                label: 'My Second dataset',
                yAxisID: 'My Second dataset',
                backgroundColor: 'orange',
                prevBackgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'orange',
                borderWidth: 1,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [3.15, 3.64, 1.92, 4.72, 7.27, 0, 2.73, 2.92],
            },
            {
                label: 'My First dataset',
                yAxisID: 'My First dataset',
                backgroundColor: 'green',
                prevBackgroundColor: 'rgba(0,0,0,0.2)',
                borderColor: 'green',
                borderWidth: 1,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [29899870, 26175602, 27210621, 638653, 3447544, 0, 420221, 131436508]
            }
        ],
        datasetsLine: [
            {
                label: 'My Second dataset',
                yAxisID: 'My Second dataset',
                backgroundColor: 'orange',
                prevBackgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'orange',
                borderWidth: 2,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [3.15, 3.64, 1.92, 4.72, 7.27, 0, 2.73, 2.92],
                fill: false
            },
            {
                label: 'My First dataset',
                yAxisID: 'My First dataset',
                backgroundColor: 'green',
                prevBackgroundColor: 'rgba(0,0,0,0.2)',
                borderColor: 'green',
                borderWidth: 2,
                prevBorderWidth: 3,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [29899870, 26175602, 27210621, 638653, 3447544, 0, 420221, 131436508],
                fill: false
            },
            // {
            //     label: 'My Third dataset',
            //     yAxisID: 'My Third dataset',
            //     backgroundColor: 'brown',
            //     prevBackgroundColor: 'rgba(0,0,0,0.2)',
            //     borderColor: 'brown',
            //     borderWidth: 1,
            //     hoverBackgroundColor: 'red',
            //     hoverBorderColor: 'rgba(255,99,132,1)',
            //     data: [0.1, 0.2, 0.7, 0.1, 0.4, 0, -0.5, 0.9],
            //     fill: false,
            //     pointStyle: 'circle'
            // }
        ]
    }

    handleLegendHover = (datasetIndex, chartType, color, borderWidth) => {
        this.setState(prevState => ({
            [`datasets${chartType}`]: prevState[`datasets${chartType}`].map((dataset, index) => index === datasetIndex ? ({
                ...dataset,
                prevBackgroundColor: dataset.backgroundColor,
                prevBorderWidth: dataset.borderWidth,
                backgroundColor: color,
                borderColor: color,
                borderWidth: borderWidth

            }) : dataset)
        }))
    }

    render () {
        return (
            <div className="App">
                <Bar data={{ labels: this.state.labels, datasets: this.state.datasetsBar }}
                     onLegendClick={this.handleLegendHover}/>
                <Line data={{ labels: this.state.labels, datasets: this.state.datasetsLine }}
                      onLegendHover={this.handleLegendHover}/>
            </div>
        );
    }
}

export default App;
