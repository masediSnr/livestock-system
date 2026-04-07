import React from 'react'
import Table from '../components/Table'

function AnimalReport() {
    return (
    <div className='report-modal'>
        <div className="closer">&times;</div>
        <h2>Animal Report</h2>
        <div className="report-container">
            <div className="animal-details">
                <div className="ani-card">
                    <div className="sbs-view">
                        <img src="" alt="" />
                        <div className="fields">
                            <sub-field>
                                <h4>Animal ID</h4>
                                <span>ACM-2026-01</span>
                            </sub-field>
                            <sub-field>
                                <h4>Tag Number</h4>
                                <span>A2026d01</span>
                            </sub-field>
                            <sub-field>
                                <h4>Status</h4>
                                <span>Healthy</span>
                            </sub-field>
                        </div>
                    </div>
                    <div className="btm-fields">
                            <sub-field>
                                <h4>Animal ID</h4>
                                <span>ACM-2026-01</span>
                            </sub-field>
                            <sub-field>
                                <h4>Tag Number</h4>
                                <span>A2026d01</span>
                            </sub-field>
                            <sub-field>
                                <h4>Status</h4>
                                <span>Healthy</span>
                            </sub-field>
                            <sub-field>
                                <h4>Status</h4>
                                <span>Healthy</span>
                            </sub-field>

                    </div>
                </div>
                <div className="ani-more-details">
                     <sub-field>
                        <h4>Animal ID</h4>
                        <span>ACM-2026-01</span>
                    </sub-field>
                    <sub-field>
                        <h4>Tag Number</h4>
                        <span>A2026d01</span>
                    </sub-field>
                    <sub-field>
                        <h4>Status</h4>
                        <span>Healthy</span>
                    </sub-field>
                     <sub-field>
                        <h4>Animal ID</h4>
                        <span>ACM-2026-01</span>
                    </sub-field>
                    <sub-field>
                        <h4>Tag Number</h4>
                        <span>A2026d01</span>
                    </sub-field>
                    <sub-field>
                        <h4>Status</h4>
                        <span>Healthy</span>
                    </sub-field>
                     <sub-field>
                        <h4>Animal ID</h4>
                        <span>ACM-2026-01</span>
                    </sub-field>
                    <sub-field>
                        <h4>Tag Number</h4>
                        <span>A2026d01</span>
                    </sub-field>
                    
                </div>
            </div>
            <div className="animal-timeline">
                <div className="liner">
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                </div>
            </div>
            <div className="health-events">
                <Table/>
            </div>
        </div>
    </div>
    )
}

export default AnimalReport
