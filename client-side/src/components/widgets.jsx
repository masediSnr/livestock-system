import React from 'react'

function Widgets() {
    return (
        <>
            <div className="widget-container">
                <div className="card-info">
                    <div className="info">
                        <div className="count">
                            <h2>40</h2>
                            <h3>In Withdrawal</h3>
                        </div>
                        <ul>
                            <li>Cattle</li>
                            <li>Sheep</li>
                            <li>Poultry</li>
                        </ul>
                    </div>
                    <select name="view" id="">
                        <option value="View All">View All</option>
                        <option value="Cattle">Cattle</option>
                        <option value="Sheep">Sheep</option>
                        <option value="Poultry">Poultry</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Widgets
