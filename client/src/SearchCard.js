import React from 'react'

function SearchCard({user}) {
    
    return (
        <div className="user-card">
            <h3>{user.username}</h3>
        </div>
    )
}

export default SearchCard
