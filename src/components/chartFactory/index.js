import React from 'react'
import Line from '../Line'
import Pie from '../Pie'
import Bar from '../Bar'

const Factory = ({data, ...props}) => {
    switch (data.type) {
        case 'line':
            return <Line data={data} {...props} />
        case 'pie':
            return <Pie data={data} {...props} />
        case 'bar':
        default:
            return <Bar data={data} {...props} />
    }
}

export default Factory
