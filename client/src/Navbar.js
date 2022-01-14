import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
import './index.css';
import { useNavigate } from 'react-router-dom';

function Navbar({setCurrentUser}) {
    const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })
      .then(() => console.log("Delete successful"))
      .then((x) => {
        setCurrentUser("");
        navigate("/");
      });
  }
    return (
        <div className="navbar">
            <NavLink to='/upload'><FontAwesomeIcon className="nav-button" id='camera' icon={faCamera} /></NavLink>
            <NavLink to='/home'><FontAwesomeIcon className="nav-button" id="home" icon={faHome} /></NavLink>
            <NavLink to='/search'><FontAwesomeIcon className="nav-button" id="search" icon={faSearch} /></NavLink>
            <FontAwesomeIcon onClick={handleLogout} className="nav-button" id="sign-out" icon={faSignOutAlt} />

        </div>
    )
}

export default Navbar