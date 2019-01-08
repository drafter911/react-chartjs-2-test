import React from 'react';
import {Line} from 'react-chartjs-2';

const BarChart = ({data, onLegendClick}) => (
    <div>
        <h2>Line</h2>
        <div style={{height:300}}>
            <Line
                data={data}
                width={100}
                height={200}
                options={{
                    title: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            id: 'My First dataset',
                            position: 'left',
                            gridLines: {
                                borderDash: [3]
                            },
                            scaleLabel: {
                                display: true,
                                labelString: '$'
                            }
                        }, {
                            id: 'My Second dataset',
                            position: 'right',
                            gridLines: {
                                borderDash: [3]
                            },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Days'
                                }
                        }
                        // , {
                        //     id: 'My Third dataset',
                        //     position: 'right',
                        //     gridLines: {
                        //         borderDash: [3]
                        //     },
                        //     scaleLabel: {
                        //         display: true,
                        //         labelString: '%'
                        //     }
                        // }
                        ],
                        xAxes: [{
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                mirror: true
                            }
                        }]
                    },
                    legend: {
                        onClick: (e, {datasetIndex}) => {},
                        onHover: (e, {datasetIndex}) => {}
                    }
                }}
            />
        </div>
    </div>
)

export default BarChart
