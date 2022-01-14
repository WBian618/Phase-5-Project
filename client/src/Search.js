import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchContainer from './SearchContainer'

function Search({search, setSearch, users}) {

        function handleSubmit(e) {
        e.preventDefault();
        setSearch(search);
    }
    

    // function handleRemoveUser(id) {
    //     const newUsers = users.filter((user) => user.id !== id)
    //     setUsers(newUsers)
    // }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FontAwesomeIcon id='search2' icon={faSearch} value={search}/>
                <input id="searchbar" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Users..." type="text"></input>
            </form>
            <SearchContainer users={users}/>
        </div>
    )
}

export default Search
