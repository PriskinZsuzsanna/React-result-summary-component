import './PurpleContainer.css'

import React from 'react'

const PurpleContainer = ({ resultData }) => {
    return (
        <div className="purple-container">
            <h3>{resultData.resultText}</h3>
            <div className="circle">
                <h1>{resultData.resultPercent}</h1>
                <p>{resultData.totalPercent}</p>
            </div>
            <h2>{resultData.degree}</h2>
            <h4>{resultData.text}</h4>
        </div>
    )
}

export default PurpleContainer
