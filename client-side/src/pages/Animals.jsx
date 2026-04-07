import React from 'react'
import SearchBar from '../components/SearchBar'
import Widgets from '../components/widgets'
import { Outlet } from 'react-router-dom'

function Animals() {
    return (
        <>
            <SearchBar/>
            <div className="animals-container">
                <h2>Animals</h2>

                <div className="field-position">
                    <div className="sub-group widgets">
                        <Widgets/>
                        <Widgets/>
                        <Widgets/>
                    </div>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default Animals
