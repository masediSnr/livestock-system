import React from 'react'
import { NavLink, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/SideBar'
import Pager from './components/Pager'


import './App.css'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Camp from './pages/Camp';


function App() {
  return (
        <div className="container">
          <Header/>
          <div className="client">
            <SideBar/>
            <Pager/>
              {/* <div className="nav-links">
                <NavLink to="/dashboard" >Dashboad</NavLink>
                <NavLink to="/home" >Animals</NavLink>
                <NavLink to="/inventories" >Animals</NavLink>
                <NavLink to="/camps" >Animals</NavLink>
              </div>
              
              <Routes >
                <Route path='/dashboard' element={ <Dashboard/> } />
                <Route path='/home' element={ <Home/> } />
                <Route path='/inventories' element={ <Inventory/> } />
                <Route path='/camps' element={ <Camp/> } />
              </Routes> */}
            
          </div>
        </div>
    );
}

export default App
