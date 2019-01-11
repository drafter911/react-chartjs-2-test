import React from 'react'
import './styles.css'

const Actions = ({handleSizeChange, handleReportTypeChange, id}) => (
    <div className={'ActionsWrapper'}>
        <button
            onClick={() => handleSizeChange('small', id)}>[.]
        </button>
        <button
            onClick={() => handleSizeChange('medium', id)}>[..]
        </button>
        <button
            onClick={() => handleSizeChange('large', id)}>[...]
        </button>
        <button onClick={() =>handleReportTypeChange(id, 'line')}>Line</button>
        <button onClick={() =>handleReportTypeChange(id, 'bar')}>Bar</button>
        <button onClick={() =>handleReportTypeChange(id, 'pie')}>Pie</button>
    </div>
)

export default Actions
