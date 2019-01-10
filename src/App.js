import React, { Component } from 'react';
import './App.css';
import ChartFactory from './components/chartFactory'

const lineConfig = {
    borderWidth: 2,
    normalBorderWidth: 2,
    activeBorderWidth: 4,
    disabledBorderWidth: 0.5,
    pointHoverBorderWidth: 2,
    fill: false,
    pointBackgroundColor: '#fff',
    disabledColor: 'rgba(0,0,0,0.1)',
    pointBorderWidth: 1,
    spanGaps: true,
    lineTension: 0
}

class App extends Component {
    state = {
        datasets: [
            {
                labels: ['Crome (Crome)', 'Firefox (Firefox)', 'miscellaneous {misc}', 'Microsoft Edge (MSEdge)', 'Microsoft InternetExplorer (MSIE)', 'Netscape (Netscape)', 'Opera (Opera)', 'Safari (Safari)'],
                type: 'line',
                id: '1',
                redraw: false,
                multiAxes: true,
                size: 'large',
                datasets: [{
                    ...lineConfig,
                    label: 'My Second dataset',
                    yAxisID: 'My Second dataset',
                    backgroundColor: 'orange',
                    prevBackgroundColor: 'orange',
                    borderColor: 'orange',
                    hoverBackgroundColor: 'orange',
                    hoverBorderColor: 'orange',
                    data: [3.15, 3.64, 1.92, 4.72, 7.27, 0, 2.73, 2.92]
                },
                    {
                        ...lineConfig,
                        label: 'My First dataset',
                        yAxisID: 'My First dataset',
                        backgroundColor: 'green',
                        prevBackgroundColor: 'green',
                        borderColor: 'green',
                        hoverBackgroundColor: 'green',
                        hoverBorderColor: 'green',
                        data: [29899870, 26175602, 27210621, 638653, 3447544, 0, 420221, 131436508]
                    }]
            },
            {
                labels: ['Crome (Crome)', 'Firefox (Firefox)', 'miscellaneous {misc}', 'Microsoft Edge (MSEdge)', 'Microsoft InternetExplorer (MSIE)', 'Netscape (Netscape)', 'Opera (Opera)', 'Safari (Safari)'],
                type: 'bar',
                id: '2',
                redraw: false,
                multiAxes: true,
                size: 'small',
                datasets: [
                    {
                        ...lineConfig,
                        label: 'My Second dataset',
                        yAxisID: 'My Second dataset',
                        backgroundColor: 'orange',
                        prevBackgroundColor: 'orange',
                        borderColor: 'orange',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,165,0,0.7)',
                        hoverBorderColor: 'orange',
                        data: [3.15, 3.64, 1.92, 4.72, 7.27, 0, 2.73, 2.92],
                    },
                    {
                        ...lineConfig,
                        label: 'My First dataset',
                        yAxisID: 'My First dataset',
                        backgroundColor: 'green',
                        prevBackgroundColor: 'green',
                        borderColor: 'green',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [29899870, 26175602, 27210621, 638653, 3447544, 0, 420221, 131436508]
                    }
                ]
            },
            {
                labels: ["June 2018", "July 2018", "August 2018", "September 2018", "October 2018", "November 2018"],
                type: 'line',
                id: '3',
                redraw: false,
                size: 'small',
                datasets: [
                    {
                        ...lineConfig,
                        label: 'MacKeeper 2012 - Lite License (w/ Keys for in-app) (132732)',
                        backgroundColor: '#FF8A00',
                        prevBackgroundColor: '#FF8A00',
                        borderColor: '#FF8A00',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,165,0,0.7)',
                        hoverBorderColor: '#FF8A00',
                        data: [0, 0, 0, -0.6666666666666666, 2, -0.6666666666666666]
                    },
                    {
                        ...lineConfig,
                        label: 'MacKeeper 2012 - Premium License(w/ Keys for resellers) (134495)',
                        backgroundColor: '#007285',
                        prevBackgroundColor: '#007285',
                        borderColor: '#007285',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(0,128,0,0.7)',
                        hoverBorderColor: '#007285',
                        data: [0, 0, 1, -1, 0, 0]
                    },
                    {
                        ...lineConfig,
                        label: 'Others',
                        backgroundColor: '#777779',
                        prevBackgroundColor: '#777779',
                        borderColor: '#777779',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#777779',
                        data: [-0.07137855920336082, -0.07780756503162568, -0.04283345824532716, 0.015992407165737334, -0.0409864779653892, -0.021089031755308785]
                    },
                    {
                        ...lineConfig,
                        label: 'PCK_TS_Basic_1year (141808)',
                        backgroundColor: '#F9C62C',
                        prevBackgroundColor: '#F9C62C',
                        borderColor: '#F9C62C',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#F9C62C',
                        data: [0, 0, -0.75, 0, 0.5, 0]
                    },
                    {
                        ...lineConfig,
                        label: 'PCKeeper Antivirus Lite (current) (139357)',
                        backgroundColor: '#C1C1C1',
                        prevBackgroundColor: '#C1C1C1',
                        borderColor: '#C1C1C1',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#C1C1C1',
                        data: [1, 2.5, -0.7142857142857143, 1, -1, 0]
                    },
                    {
                        ...lineConfig,
                        label: 'PCKeeper LIVE Basic(3month_SAAS) (141583)',
                        backgroundColor: '#0AADC8',
                        prevBackgroundColor: '#0AADC8',
                        borderColor: '#0AADC8',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#0AADC8',
                        data: [-1, 0, 0, -1, 0, 0]
                    }
                ]
            },
            {
                labels: ["June 2018", "July 2018", "August 2018", "September 2018", "October 2018", "November 2018"],
                type: 'bar',
                id: '4',
                redraw: false,
                size: 'small',
                datasets: [
                    {
                        ...lineConfig,
                        label: 'MacKeeper 2012 - Lite License (w/ Keys for in-app) (132732)',
                        backgroundColor: '#FF8A00',
                        prevBackgroundColor: '#FF8A00',
                        borderColor: '#FF8A00',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,165,0,0.7)',
                        hoverBorderColor: '#FF8A00',
                        data: [0, 0, 0, -0.6666666666666666, 2, -0.6666666666666666]
                    },
                    {
                        ...lineConfig,
                        label: 'MacKeeper 2012 - Premium License(w/ Keys for resellers) (134495)',
                        backgroundColor: '#007285',
                        prevBackgroundColor: '#007285',
                        borderColor: '#007285',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(0,128,0,0.7)',
                        hoverBorderColor: '#007285',
                        data: [0, 0, 1, -1, 0, 0]
                    },
                    {
                        ...lineConfig,
                        label: 'Others',
                        backgroundColor: '#777779',
                        prevBackgroundColor: '#777779',
                        borderColor: '#777779',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#777779',
                        data: [-0.07137855920336082, -0.07780756503162568, -0.04283345824532716, 0.015992407165737334, -0.0409864779653892, -0.021089031755308785]
                    },
                    {
                        ...lineConfig,
                        label: 'PCK_TS_Basic_1year (141808)',
                        backgroundColor: '#F9C62C',
                        prevBackgroundColor: '#F9C62C',
                        borderColor: '#F9C62C',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#F9C62C',
                        data: [0, 0, -0.75, 0, 0.5, 0]
                    },
                    {
                        ...lineConfig,
                        label: 'PCKeeper Antivirus Lite (current) (139357)',
                        backgroundColor: '#C1C1C1',
                        prevBackgroundColor: '#C1C1C1',
                        borderColor: '#C1C1C1',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#C1C1C1',
                        data: [1, 2.5, -0.7142857142857143, 1, -1, 0]
                    },
                    {
                        ...lineConfig,
                        label: 'PCKeeper LIVE Basic(3month_SAAS) (141583)',
                        backgroundColor: '#0AADC8',
                        prevBackgroundColor: '#0AADC8',
                        borderColor: '#0AADC8',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,128,0,0.7)',
                        hoverBorderColor: '#0AADC8',
                        data: [-1, 0, 0, -1, 0, 0]
                    }
                ]
            }
        ]
    }

    handleLegendHover = (id, datasetIndex, isActiveOneGraph) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => {
                if (ds.id === id) {
                    return {
                        ...ds,
                        datasets: ds.datasets.map((dataset, index) => index === datasetIndex ? ({
                            ...dataset,
                            prevBorderWidth: dataset.borderWidth,
                            borderWidth: isActiveOneGraph ? dataset.activeBorderWidth : dataset.normalBorderWidth

                        }) : ({
                            ...dataset,
                            backgroundColor: isActiveOneGraph ? dataset.disabledColor : dataset.prevBackgroundColor,
                            borderColor: isActiveOneGraph ? dataset.disabledColor : dataset.prevBackgroundColor,
                            borderWidth: isActiveOneGraph ? dataset.disabledBorderWidth : dataset.normalBorderWidth
                        }))
                    }
                }
                else return ds
            })
        }))
    }

    handleSizeChange = (size, id) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => ds.id === id ? ({
                ...ds,
                size
            }) : ds)
        }))
    }

    handleReportTypeChange = (id, type) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => ds.id === id ? ({
                ...ds,
                type: type !== ds.type ? type : ds.type
            }) : ds)
        }))
    }

    getContainerSize = size => {
        switch (size) {
            case 'small':
            default:
                return '32%'
            case 'medium':
                return '66%'
            case 'large':
                return '100%'
        }
    }

    render () {
        return (
            <div className="App">
                <div style={{
                    display: 'flex',
                    width: '100%',
                    flexFlow: 'row wrap',
                    justifyContent: 'space-between'
                }}>
                    {
                        this.state.datasets.map(datasets =>
                            (
                                <div key={datasets.id}
                                     style={{ width: this.getContainerSize(datasets.size) }}>
                                    <div style={{
                                        paddingTop: 20,
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <button
                                            onClick={() => this.handleSizeChange('small', datasets.id)}>[.]
                                        </button>
                                        <button
                                            onClick={() => this.handleSizeChange('medium', datasets.id)}>[..]
                                        </button>
                                        <button
                                            onClick={() => this.handleSizeChange('large', datasets.id)}>[...]
                                        </button>
                                        <button onClick={() =>this.handleReportTypeChange(datasets.id, 'line')}>Line</button>
                                        <button onClick={() =>this.handleReportTypeChange(datasets.id, 'bar')}>Bar</button>
                                    </div>
                                    <ChartFactory
                                        data={datasets}
                                        onLegendHover={this.handleLegendHover}/>
                                </div>
                            ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
