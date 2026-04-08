import React from 'react'
import Table from '../components/Table'
import { useNavigate } from 'react-router-dom'

function AnimalReport() {

    const statusColour = {
        healthy : {backgroundColor : "green"},
        quarantine : {backgroundColor : "orange"},
        withdrawal : {backgroundColor : "red"},
        sold : {backgroundColor : "gray"},
    }
    let navigate = useNavigate()

    return (
    <div className='report-modal'>
        <div onClick={()=>navigate(-1)} className="closer">&times;</div>
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
                                <span id='animal-status-colour' style={statusColour["healthy"]}>Healthy</span>
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
                    <div className="dots">
                        <span>Treatment</span>
                    </div>
                    <div className="dots">
                        <span>Vaccine</span>
                    </div>
                    <div className="dots">
                        <span>Check-Up</span>
                    </div>
                </div>
            </div>
            <div className="table-holder">
                <Table/>
            </div>
        </div>
        <button>Download Report</button>
        <button>Email Report</button>
    </div>
    )
}

export default AnimalReport
