import React, { Component } from 'react';
import './App.css';
import ChartFactory from './components/chartFactory'
import Actions from './components/Actions'
import datasets from './data'
import { colors } from './constants'

class App extends Component {
    state = {
        datasets,
        colors,
        reportNumber: 1
    }

    handleLegendHover = (id, datasetIndex, isActiveOneGraph, isPie) => {
        if (isPie) {
            if (isActiveOneGraph) {
                this.setState(prevState => ({
                    colors: prevState.colors.map((color, index) => {
                        return index !== datasetIndex ? 'rgba(0,0,0, 0.1)' : color
                    }),
                }))
            }
            else {
                this.setState(prevState => ({
                    colors,
                }))
            }
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => {
                    if (ds.id === id) {
                        return {
                            ...ds,
                            redraw: isActiveOneGraph
                        }
                    }
                    else return ds
                })
            }))

        }
        else {
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => {
                    if (ds.id === id) {
                        return {
                            ...ds,
                            redraw: isActiveOneGraph,
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
    }

    handleSizeChange = (size, id) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => ds.id === id ? ({
                ...ds,
                size,
                redraw: true,
                maxTicksLimit: this.getTicksLimit(size)
            }) : ds)
        }), () => {
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => {
                    return ds.id === id ? ({
                        ...ds,
                        redraw: false,
                    }) : ds
                })
            }))
        })
    }

    handleReportTypeChange = (id, type) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => ds.id === id ? ({
                ...ds,
                type: type !== ds.type ? type : ds.type
            }) : ds)
        }))
    }

    handleAddNewDataset = () => {
        this.setState(prevState => {
            const copy = [...prevState.datasets]
            copy.push({
                ...datasets[prevState.reportNumber],
                id: prevState.datasets.length + 1
            })
            return {
                reportNumber: prevState.reportNumber === 2 ? 1 : 2,
                datasets: copy
            }
        })
    }

    getContainerSize = size => {
        switch (size) {
            case 'small':
            default:
                return 'calc(100%/3 - 20px)'
            case 'medium':
                return 'calc(100%/3*2 - 20px)'
            case 'large':
                return '100%'
        }
    }

    getTicksLimit = size => {
        switch (size) {
            case 'small':
                return 5
            case 'medium':
                return 9
            case 'large':
                return 15
            default:
                return 10
        }
    }

    render () {
        return (
            <div className="App">
                <button onClick={this.handleAddNewDataset}>Add new report</button>
                <div className={'AppWrapper'}>
                    {
                        this.state.datasets.map(datasets =>
                            (
                                <div key={datasets.id}
                                     className={'AppChartWrapper'}
                                     style={{ width: this.getContainerSize(datasets.size) }}>
                                    <div className={'ChartWrapper'}>
                                        <Actions handleSizeChange={this.handleSizeChange}
                                                 handleReportTypeChange={this.handleReportTypeChange}
                                                 id={datasets.id}/>
                                        <ChartFactory
                                            data={datasets}
                                            onLegendHover={this.handleLegendHover}
                                            colors={this.state.colors}/>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
