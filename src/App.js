import React, { Component } from 'react';
import './App.css';
import ChartFactory from './components/chartFactory'
import Actions from './components/Actions'
import datasets from './data'

class App extends Component {
    state = {
        datasets,
        reportNumber: 1
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
                size,
                redraw: true,
                maxTicksLimit: this.getTicksLimit(size)
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

    handleCancelRedraw = id => {
        const { datasets } = this.state

        if(datasets.some(ds => ds.redraw)) {
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => ({
                    ...ds,
                    redraw: false
                }))
            }))
        }
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
                datasets : copy
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
                                     onMouseMove={this.handleCancelRedraw}
                                     style={{ width: this.getContainerSize(datasets.size) }}>
                                    <div className={'ChartWrapper'}>
                                        <Actions handleSizeChange={this.handleSizeChange}
                                                 handleReportTypeChange={this.handleReportTypeChange}
                                                 id={datasets.id}/>
                                        <ChartFactory
                                            data={datasets}
                                            onLegendHover={this.handleLegendHover}/>
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
