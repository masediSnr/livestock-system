import React from 'react'

function NotificationPanel() {

    const noti_Icon = {
        fontSize: "18px",
        fontWeight: "800",
        color: "red",
        position: "absolute",
        left: "0px",
        top: "0px"
    }

    return (
        <div className="notification-panel">
            <div className="displayer">
                <h3 className="showing-title">New*: Task Assigned</h3>
                <div className="panel">
                    <div className="user-sender">
                        <span style={noti_Icon}>*</span>
                        <img src="" alt="" />
                        <div className="name-subject">
                            <h4>Monama Tadima</h4>
                            <div className="subject-datetime">
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit </span>
                                <span>11:56 pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-sender">
                        <span style={noti_Icon}>*</span>
                        <img src="" alt="" />
                        <div className="name-subject">
                            <h4>Monama Tadima</h4>
                            <div className="subject-datetime">
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit </span>
                                <span>11:56 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="noti-buttons">
                <button>
                    <span style={noti_Icon}>*</span>
                    Tasks
                </button>
                <button>
                    <span style={noti_Icon}>*</span>
                    Assign Tasks
                </button>
                <button>
                    <span style={noti_Icon}>*</span>
                    Messages
                </button>
            </div>
        </div>
    )
}

export default NotificationPanel
