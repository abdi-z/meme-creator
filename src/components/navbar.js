import React from 'react';
import './Navbar.css';
import facee from './facee.png'

export default function navbar(){
    return(
        <nav className='navbar'>
            <div className='title'>
            <img src={facee} alt="face icon" width="80px"/>
            <h2>Meme Creator</h2>
            </div>
            <h4>By Abdul Rehman Aziz</h4>
        </nav>
    )
}