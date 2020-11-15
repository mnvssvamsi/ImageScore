import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
 const NavBar = () => {
    return (
            <ul className='nav'>
                <li className='NavigationItem'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='NavigationItem'>
                    <Link to='/score'>Score</Link>
                </li>
            </ul>
    )
}

export default NavBar