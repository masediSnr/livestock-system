import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import Camp from '../pages/Camp'
import Forms from "../components/Forms"
import StockMovement from '../pages/StockMovement'
import AnimalMovement from '../pages/AnimalMovement'
import Animals from '../pages/Animals'
import AnimalReport from '../pages/AnimalReport'

function Pager() {
    return (
        <main className='ux'>
            {/* <Forms formTitle="Treatments" /> */}
            <Routes>
                <Route path='/dashboard' element={ <Dashboard/> } />
                <Route path='/home' element={ <Home/> } />
                <Route path='/animals' element={ <Animals/> }>
                    <Route path='report/:id' element={<AnimalReport/>} />
                    <Route path='movements' element={<AnimalMovement/>} />
                </Route>
                <Route path='/movements/stock' element={ <StockMovement/> } />
                <Route path='/inventories' element={ <Inventory/> } />
                <Route path='/camps' element={ <Camp/> } >
                    <Route path='view-camps' element={<Forms />} />
                    <Route path='register' element={<Forms formTitle="Farm Locations" />} />
                </Route>
            </Routes>
        </main>
    )
}

export default Pager
