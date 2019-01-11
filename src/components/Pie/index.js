import React from 'react';
import { Pie } from 'react-chartjs-2';
import Legend from '../Legend'

const colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF8A00',
    '#FF444E',
    '#69FF2F',
]

const PieChart = ({ data: incomingData, onLegendHover }) => {
    const data = {
        ...incomingData,
        labels: incomingData.datasets.reduce((labels, ds) => {
            const copy = [...labels]
            copy.push(ds.label)
            return copy
        }, []),
        datasets: [{
            normalBorderWidth: 2,
            activeBorderWidth: 4,
            disabledBorderWidth: 0.5,
            pointHoverBorderWidth: 2,
            fill: false,
            pointBackgroundColor: '#fff',
            disabledColor: 'rgba(0,0,0,0.1)',
            pointBorderWidth: 1,
            spanGaps: true,
            lineTension: 0,
            label: 'MacKeeper 2012 - Lite License (w/ Keys for in-app) (132732)',
            backgroundColor: colors,
            hoverBackgroundColor: colors,
            prevBackgroundColor: '#FF8A00',
            borderColor: '#FF8A00',
            borderWidth: 1,
            hoverBorderColor: '#FF8A00',
            data: incomingData.datasets.reduce((res, ds) => {
                const copy = [...res]
                copy.push(ds.data.reduce((r, e) => {
                    return r + e
                }, 0))
                return copy
            }, [])
        }]
    }
    const options = {
        responsive: true,
        title: {
            display: false
        },
        maintainAspectRatio: false,

        legend: { display: false },
        tooltips: {
            callbacks: {
                title: (arr, data) => data.labels[arr[0].index]
            }
        }
    }
    return (
        <div>
            <h2>Pie</h2>
            <div style={{ height: 300, position: 'relative' }}>
                <Pie
                    data={data}

                    height={200}
                    options={options}
                />
            </div>
            <Legend id={data.id} datasets={data} onLegendHover={onLegendHover} pie/>
        </div>
    )
}

export default PieChart
