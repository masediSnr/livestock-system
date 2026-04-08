import React from 'react'
import Table from '../components/Table'

function StockMovement() {
    return (
        <div className="stock-container">
            <h2>Stock Movement</h2>
            <div className="notification-panel">

            </div>
            <div className="table-holder">
                <Table />
            </div>
        </div>
    )
}

export default StockMovement
