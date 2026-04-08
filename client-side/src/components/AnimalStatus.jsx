import React from 'react'

function AnimalStatus() {
    return (
        <div className="health-board">
            <div className="health-status-board">
                <h5>Health status board</h5>
                <div className="round-edges card b-solid">
                    <ul>
                        <li className='inline x-align-center'>
                            <div className="view-count">
                                <h3>21</h3>
                            </div>
                            <span>Healthy</span>
                            <div className="colour-coder"></div>
                        </li>
                        <li className='inline x-align-center'>
                            <div className="view-count">
                                <h3>21</h3>
                            </div>
                            <span>Quarantine</span>
                            <div className="colour-coder"></div>
                        </li>
                        <li className='inline x-align-center'>
                            <div className="view-count">
                                <h3>21</h3>
                            </div>
                            <span>In Treatment</span>
                            <div className="colour-coder"></div>
                        </li>
                        <li className='inline x-align-center'>
                            <div className="view-count">
                                <h3>21</h3>
                            </div>
                            <span>Healthy</span>
                            <div className="colour-coder"></div>
                        </li>
                        <li className='inline x-align-center'>
                            <div className="view-count">
                                <h3>21</h3>
                            </div>
                            <span>Healthy</span>
                            <div className="colour-coder"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AnimalStatus
