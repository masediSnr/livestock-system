import React from 'react'
import Table from '../components/Table'
import SearchBar from '../components/SearchBar'
import NotificationPanel from '../components/NotificationPanel'

function Home({user}) {

    let welcomeUser = {
        name: "Terrence Masedi",
        role: "Admin"
    }


    return (
        <>
            <div className="home-container">
                <h2>Welcome {welcomeUser.name} !</h2>
                <NotificationPanel/>
                <div className="splitter">
                    <Table/>
                </div>
            </div>
        </>
    )
}

export default Home
