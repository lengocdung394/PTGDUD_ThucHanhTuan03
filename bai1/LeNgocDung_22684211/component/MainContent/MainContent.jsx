import { useState } from "react";
import './MainContent.css'
import hinhanh from '../../image/image.png'

export default function MainContent() {
    return (
        <div class="content">
            <div id="left"></div>
            <div id="right">
                <h2>Sory, no results were found for "cakescascsa"</h2>
                <img src={hinhanh} alt="" />
                <p >We have all your independence Day sweets covered</p>
                <div id="buttons">
                    <button>Sweet Cake</button>
                    <button>Black Cake</button>
                    <button>Pozele Verde</button>
                    <button>Healthy Food</button>
                </div>
            </div>
        </div>
    )
}