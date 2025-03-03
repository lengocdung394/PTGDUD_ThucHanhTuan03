import { useState } from 'react'
import './Header.css'

export default function Header() {
    return (
        <>
            <header class="navbar">
                <img src="../../image/image.png" alt="" />
                <div class="logo">Chefify</div>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="casescascsa"/>
                </div>
                <nav class="nav-links">
                    <a href="#">Work Book</a>
                    <a href="#">Recipes</a>
                    <a href="#">Ingredients</a>
                    <a href="#">Discussions</a>
                    <a href="#">About Us</a>
                </nav>
                <div class="user-profile">
                    <button class="profile-button">My Recipe Box</button>
                    <img src="../../image/image.png" alt="User Profile" class="profile-image"/>
                </div>
            </header>
        </>
    )
}
