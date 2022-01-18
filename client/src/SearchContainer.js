import React from 'react'
import SearchCard from './SearchCard'

function SearchContainer({search, users}) {

    // const [usersContainer, setUsersContainer] = useState([])
    // useEffect(() => {
    //     fetch('/users')
    //     .then(res => res.json())
    //     .then(data => setUsersContainer(data))
    // },[])

    if (search === '') return <div></div>
    return (
        <div id='searchcontainer'>
            {users.map((user) => {
                return <SearchCard key={user.id} user={user}/>
            })}
        </div>
    )
}

export default SearchContainer
