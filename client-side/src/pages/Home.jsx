import React from 'react'
import Table from '../components/Table'
import SearchBar from '../components/SearchBar'

function Home() {
    return (
        <>
            <SearchBar/>
            <div className="home-container">
                <h2>Ntinga</h2>
                <div className="splitter">
                    <Table/>
                </div>
            </div>
        </>
    )
}

export default Home
