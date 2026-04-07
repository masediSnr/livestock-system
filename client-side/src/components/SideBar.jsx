import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function SideBar() {
    return (
    <nav className='side-bar'>
        <div className="side-expander">Arrow</div>
        <div className="notes">
            
        </div>
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/animals">Animals</Link>
            </li>
            <li>
                <Link to="/inventories">Inventory</Link>
            </li>
            <li>
                <Link to="/movements/stock">Stock Movement</Link>
            </li>
            <li>
                <Link to="/movements/animals">Animal Movement</Link>
            </li>
            <li>
                <Link to="/camps">Camps</Link>
            </li>
            
        </ul>
    </nav>
    );
}

export default SideBar
