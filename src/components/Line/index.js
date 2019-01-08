import React from 'react';
import { Line } from 'react-chartjs-2';

const BarChart = ({ data, onLegendHover }) => (
    <div>
        <h2>Line</h2>
        <div style={{ height: 300 }}>
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
                            padding: 5
                        }]
                    },
                    legend: {
                        display: false
                    }
                }}
            />
        </div>
        <div style={{ display: 'flex' }}>
            {
                data.datasets.map((dataset, index) => (
                    <div
                        style={{
                            display: 'flex',
                            marginRight: 10,
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => onLegendHover(index, 'Line', dataset.hoverBackgroundColor, dataset.prevBorderWidth)}
                        onMouseLeave={() => onLegendHover(index, 'Line', dataset.prevBackgroundColor, dataset.prevBorderWidth)}>
                            <span style={{
                                width: 15,
                                height: 15,
                                background: dataset.backgroundColor,
                                marginRight: 5
                            }}></span>
                        <span>{dataset.label}</span>
                    </div>
                ))
            }
        </div>
    </div>
)

export default BarChart
