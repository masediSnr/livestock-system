import React from 'react'

function ReminderPanel() {
    return (
        <div className="activity-panel f-edges">
            <h4>Animals</h4>
            <div className="sale-ready-animals">
                <div className="round-edges card b-solid f-edges" >
                    <div className="inline">
                        <div className="view-count">
                            <h2>39</h2>
                            <a>Categories</a>
                        </div>
                        <div className="icon-holder b-solid">

                        </div>
                    </div>
                    <div className="stock-alert-title">
                    </div>
                        <h5>Ready for sale - Healthy</h5>
                </div>
            </div>
            <div className="vaccine-schedule">
                <h5>Vaccination Schedule</h5>
                <div className="round-edges card b-solid">
                    <div className="inline">
                        <div className="icon-holder b-solid">

                        </div>
                        <div className="view-count">
                            <span>In 14 Days</span>
                            <div className="inline">
                                <h2>139</h2>
                                <a>Categories</a>
                            </div>
                        </div>
                    </div>
                    <div className="stock-alert-title">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReminderPanel
