import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './index.css';

function Navbar() {
    return (
        <div ClassName="navbar">
            <FontAwesomeIcon className="nav-button" id='camera' icon={faCamera} />
            <FontAwesomeIcon className="nav-button" id="home" icon={faHome} />
            <FontAwesomeIcon className="nav-button" id="search" icon={faSearch} />
            <FontAwesomeIcon className="nav-button" id="sign-out" icon={faSignOutAlt} />

        </div>
    )
}

export default Navbar
