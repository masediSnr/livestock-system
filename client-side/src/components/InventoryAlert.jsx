import React from 'react'

function InventoryAlert() {
    return (
        <div className="inventory-alert">
            <h5>Inventory Alert</h5>

            <div className="stock-alert round-edges card b-solid">
                <div className="inline">
                    <div className="view-count">
                        <h1>3</h1>
                        <a>Categories</a>
                    </div>
                    <div className="icon-holder b-solid">

                    </div>
                </div>
                <div className="bar-status">
                    <div className="bars-holder inline">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="stock-alert-title">
                    <h6>Low Stock Items</h6>
                </div>
            </div>
            <div className="expiry-alert round-edges card b-solid">
                <div className="inline">
                    <div className="view-count">
                        <h2>16</h2>
                    </div>
                    <a>Items</a>
                </div>
                <h6>Expires in 30 Days</h6>
                <button>View Items</button>
            </div>
        </div>
    )
}

export default InventoryAlert
