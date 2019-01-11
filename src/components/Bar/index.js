import React from 'react';
import { Bar } from 'react-chartjs-2';
import Legend from '../Legend'

const BarChart = ({ data, onLegendHover }) => {
    const options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: data.multiAxes ? [{
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
            }] : [{}],
            xAxes: [{
                gridLines: {
                    display: false,
                    tickMarkLength: 10,
                    drawOnChartArea: false
                },
                ticks: {
                    maxTicksLimit: 10,
                    padding: 0,
                    autoSkipPadding: -100,
                    autoSkip: true,
                    callback: (value, index, values) => {
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
            <h2>Bar</h2>
            <div style={{ height: 300, position: 'relative' }}>
                <Bar
                    data={data}
                    options={options}
                />
            </div>
            <Legend id={data.id} datasets={data.datasets} onLegendHover={onLegendHover}/>
        </div>
    )
}

export default BarChart
