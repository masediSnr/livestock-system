import React from 'react'
import Graphs from '../components/Graphs'
import ReminderPanel from '../components/ReminderPanel'
import InventoryAlert from '../components/InventoryAlert'
import AnimalStatus from '../components/AnimalStatus'
import CustomLogs from '../components/CustomLogs'

function Dashboard() {
    return (
        <div className="dash-container">
            <h2>Dashboard</h2>
            <div className="panels-container">
                <div className="inline stats-panel">
                    <CustomLogs/>
                    <AnimalStatus/>
                    <InventoryAlert/>
                </div>
                <div className="quick-link-panel card">
                    <h3>Quick Links</h3>
                    <ul className='inline'>
                        <li><a>Animal Report</a></li>
                        <li><a>Veterinarians</a></li>
                        <li><a>Assign Tasks</a></li>
                        <li><a>Reserved Animals</a></li>

                        <li><button>Add Link</button></li>
                    </ul>
                </div>
                <div className="panel-divider inline">
                    <Graphs/>
                    <ReminderPanel/>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
