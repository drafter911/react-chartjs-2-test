import React from 'react';
import { Line } from 'react-chartjs-2';
import Legend from '../Legend'

const LineChart = ({ data, onLegendHover }) => {
    const options = {
        responsive: true,
        title: {
            display: false
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: data.multiAxes ? [
                {
                    id: 'My First dataset',
                    position: 'left',
                    gridLines: {
                        borderDash: [3]
                    },
                    ticks: {
                        // mirror: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '$'
                    }
                },
                {
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
            ] : [{
                // stacked: true
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    tickMarkLength: 10,
                    drawOnChartArea: false
                },
                ticks: {
                    maxTicksLimit: 9,
                    padding: 0,
                    autoSkipPadding: -100,
                    autoSkip: true,
                    callback: function (value, index, values) {
                        return value.length > 10 ? `${value.substring(0, 9)} ...` : value
                    }
                }
            }]
        },
        legend: { display: false },
        tooltips: {
            callbacks: {
                title: (arr, data) => data.labels[arr[0].index]
            }
        }
    }
    return (
        <div>
            <h2>Line</h2>
            <div style={{ height: 300, position: 'relative' }}>
                <Line
                    data={data}
                    options={options}
                />
            </div>
            <Legend id={data.id} datasets={data.datasets} onLegendHover={onLegendHover}/>
        </div>
    )
}

export default LineChart
