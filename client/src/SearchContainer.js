import React from 'react'
import SearchCard from './SearchCard'

function SearchContainer({users}) {
    return (
        <div>
            {users.map((user) => {
                return <SearchCard key={user.id} user={user}/>
            })}
            
        </div>
    )
}

export default SearchContainer
