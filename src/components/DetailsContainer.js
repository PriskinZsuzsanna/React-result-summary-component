import './DetailsContainer.css'


import React from 'react'

const DetailsContainer = ({ category, score, icon }) => {
    return (
        
            <div className="details-box" id={category}>
                <div className="flex-left">
                    <img src={icon} alt="" />
                    <h4>{category}</h4>
                </div>
                <div className="flex-right">
                    <h4 className="score">{score}<span>/100</span></h4>
                </div>
            </div>
        
    )
}

export default DetailsContainer
