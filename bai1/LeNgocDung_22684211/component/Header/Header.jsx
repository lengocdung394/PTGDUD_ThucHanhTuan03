import { useState } from 'react'
import './Header.css'

export default function Header() {
    return (
        <>
            <header class="navbar">
                <div class="logo">Chefify</div>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search recipes..."/>
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
                    <img src="image.jpg" alt="User Profile" class="profile-image"/>
                </div>
            </header>
        </>
    )
}
