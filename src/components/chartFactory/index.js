import React from 'react'
import Line from '../Line'
import Bar from '../Bar'

const Factory = ({data, ...props}) => {
    switch (data.type) {
        case 'line':
            return <Line data={data} {...props} />
        case 'bar':
        default:
            return <Bar data={data} {...props} />
    }
}

export default Factory
