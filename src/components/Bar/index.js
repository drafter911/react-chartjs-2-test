import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({data, onLegendClick}) => (
    <div>
        <h2>Bar</h2>
        <div style={{height:300}}>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            id: 'My First dataset',
                            position: 'left'
                        }, {
                            id: 'My Second dataset',
                            position: 'right'
                        }]
                    },
                    legend: {
                        onClick: (e, {datasetIndex}) => {},
                        onHover: (e, {datasetIndex}) => {
                            onLegendClick(datasetIndex, 'Bar')
                        }
                    }
                }}
            />
        </div>
    </div>
)

export default BarChart
