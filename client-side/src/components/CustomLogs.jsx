import React, { useEffect, useState } from 'react'

function CustomLogs() {
    const [recentLogs, setRecentLogs] = useState([])  
    useEffect(()=>{
        
    },[])  

    return (
        <div className="recent-feed">
            <h5>Recent Activity feed</h5>
            <div className="card f-edges popup-placeholder">
                <div className="list-viewer">
                    <ul className='b-solid f-edges'>
                        <li>No recent log feed</li>
                        <button>Expand</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CustomLogs
