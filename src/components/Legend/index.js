import React from 'react'

const Legend = ({ datasets, onLegendHover, id }) => (
    <div style={{ display: 'block' }}>
        {
            datasets.map((dataset, index) => (
                <div
                    key={dataset.label}
                    style={{
                        display: 'flex',
                        marginRight: 10,
                        marginBottom: 3,
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontSize: 10
                    }}
                    onMouseEnter={() => onLegendHover(id, index, true)}
                    onMouseLeave={() => onLegendHover(id, index)}>
                            <span style={{
                                width: 15,
                                height: 15,
                                background: dataset.backgroundColor,
                                marginRight: 5
                            }}></span>
                    <span style={{
                        width: 'calc(100% - 15px)',
                        textAlign: 'left'
                    }}>{dataset.label}</span>
                </div>
            ))
        }
    </div>
)

export default Legend
