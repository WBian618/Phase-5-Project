import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

function SearchCard({user}) {
    return (
        <div id='searchcard'>
            <h2>{user.username} <FontAwesomeIcon className='addUser' icon={faPlus} /> <FontAwesomeIcon className='chat' icon={faComments} /></h2>
            
        </div>
    )
}

export default SearchCard
