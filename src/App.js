import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar'
import Line from './components/Line'

const lineConfig = {
    borderWidth: 2,
    prevBorderWidth: 4,
    pointHoverBorderWidth: 2,
    fill: false,
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1
}

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
              ...lineConfig,
                label: 'My Second dataset',
                yAxisID: 'My Second dataset',
                backgroundColor: 'orange',
                prevBackgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'orange',
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [3.15, 3.64, 1.92, 4.72, 7.27, 0, 2.73, 2.92]
            },
            {
                ...lineConfig,
                label: 'My First dataset',
                yAxisID: 'My First dataset',
                backgroundColor: 'green',
                prevBackgroundColor: 'rgba(0,0,0,0.2)',
                borderColor: 'green',
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [29899870, 26175602, 27210621, 638653, 3447544, 0, 420221, 131436508]
            }
        ]
    }

    handleLegendHover = (datasetIndex, chartType, borderWidth) => {
        this.setState(prevState => ({
            [`datasets${chartType}`]: prevState[`datasets${chartType}`].map((dataset, index) => index === datasetIndex ? ({
                ...dataset,
                prevBorderWidth: dataset.borderWidth,
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
