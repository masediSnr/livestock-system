import React from 'react'

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-model">
                <div className="search">
                    <input type="text"
                    type="text"
                    placeholder='Search through the database e.g by Animal ID - ACM-26-001'
                    name='search'
                    />
                    <span>Search</span>

                </div>
                <div className="search-model-drop">
                    <ul> {null && 
                            <li></li>
                        }
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SearchBar
