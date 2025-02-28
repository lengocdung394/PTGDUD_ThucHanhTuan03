import { useState } from "react";
import './MainContent.css'
import hinhanh from '../../image/image.png'

export default function MainContent() {
    var style1 = {
        color: '#FF4081',
        fontSize: '15px',
        textAlign: 'center',
        backgroundColor: 'rgb(244, 207, 223)',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginright: '10px',
    }
    var style2 = {
        color: '#FF4081',
        fontSize: '15px',
        textAlign: 'center',
        backgroundColor:'rgb(245, 205, 246)',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginright: '10px',
    }
    var style3 = {
        color: '#9feeee',
        fontSize: '15px',
        textAlign: 'center',
        backgroundColor: 'rgb(197, 243, 248)',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginright: '10px',
    }
    return (
        <div class="content">
            <div id="left"></div>
            <div id="right">
                <h2>Sory, no results were found for "cakescascsa"</h2>
                <img id="image" src={hinhanh} alt="" />
                <p >We have all your independence Day sweets covered</p>
                <div id="buttons">
                    <button style = {style1}>Sweet Cake</button>
                    <button style = {style2}>Black Cake</button>
                    <button style = {style1}>Pozele Verde</button>
                    <button style = {style3}>Healthy Food</button>
                </div>
            </div>
        </div>
    )
}