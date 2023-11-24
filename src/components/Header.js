import React from 'react'
import { FaBitcoin } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <Link to='/'>
            <div className='header'>
                <FaBitcoin className='icon' />
                <h1> Coin<span className='purple'>KU</span></h1>
            </div>
        </Link>
    )
}

export default Header