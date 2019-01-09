import React from 'react'

const Legend = ({ datasets, onLegendHover, id }) => (
    <div style={{ display: 'flex' }}>
        {
            datasets.map((dataset, index) => (
                <div
                    key={dataset.label}
                    style={{
                        display: 'flex',
                        marginRight: 10,
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={() => onLegendHover(id, index, true)}
                    onMouseLeave={() => onLegendHover(id, index)}>
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
)

export default Legend
