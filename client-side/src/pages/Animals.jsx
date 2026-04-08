import React from 'react'
import SearchBar from '../components/SearchBar'
import Widgets from '../components/widgets'
import { Outlet } from 'react-router-dom'

function Animals() {
    return (
        <>
            <div className="animals-container">
                <div className="modal">
                    <Outlet/>
                </div>
                
                <div className="field-position">
                    <div className="sub-group">
                        <h3>Animal(s) Stats</h3>
                        <div className="widgets">
                            <Widgets/>
                            <Widgets/>
                            <Widgets/>
                        </div>
                    </div>
                    <div className="sub-group">
                        <h3>Actions</h3>
                        <div className="buttons">
                            <div className="wdg">
                                <button>View Animals</button>
                                <button>Tasks</button>
                                <button>Notifications</button>
                                <button>Generate Pdf</button>
                                <button>Send Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Animals
