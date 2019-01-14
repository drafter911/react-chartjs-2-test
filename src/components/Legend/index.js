import React from 'react'
import './styles.css'

const Legend = ({ datasets, onLegendHover, id, pie }) => (
    <div className={'LegendWrapper'}>
        {
            pie ?
                datasets.labels.map((dataset, index) => (
                    <div
                        key={dataset}
                        className={'legendItemWrapper'}
                        onMouseEnter={() => onLegendHover(id, index, true, pie)}
                        onMouseLeave={() => onLegendHover(id, index, false, pie)}>
                        <span className={'colorMarker'}
                              style={{ background: datasets.datasets[0].backgroundColor[index] }}></span>
                        <span className={'textMarker'}>{dataset}</span>
                    </div>
                ))
                :
                datasets.map((dataset, index) => (
                    <div
                        key={dataset.label}
                        className={'legendItemWrapper'}
                        onMouseEnter={() => onLegendHover(id, index, true)}
                        onMouseLeave={() => onLegendHover(id, index)}>
                        <span className={'colorMarker'}
                              style={{ background: dataset.backgroundColor }}></span>
                        <span className={'textMarker'}>{dataset.label}</span>
                    </div>
                ))
        }
    </div>
)

export default Legend
