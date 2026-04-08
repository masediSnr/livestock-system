import React from 'react'
import SearchBar from './SearchBar'

function Header() {

    
    return (
        <div className='header-bar'>
            <div className="logo">
                <img src="" alt="company-logo" />
            </div>
            <div className="md-part">
                <SearchBar/>
            </div>
            <div className="user-profile">
                <button>Upgrade</button>
                <div className="user">
                    <img src="" alt="user" />
                    <div className="drop-down">
                        <div>
                            <span>TM  Mokgope</span>
                            <small>Admin</small>
                        </div>
                        <ul>
                            <li>Profile</li>
                            <li>Notification</li>
                            <li>Settings</li>
                            <button>Logout</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
