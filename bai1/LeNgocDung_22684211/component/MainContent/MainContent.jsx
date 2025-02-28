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
        backgroundColor: 'rgb(245, 205, 246)',
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
            <div id="left">
                <div class="filters-container">
                    <div class="hamburger">
                        <div id="hamburger-icon">
                            &#9776;
                        </div>
                        <h2 class="filters-header">FILTERS</h2>
                    </div>


                    <div id="filterOptions">
                        <div class="filter-group">
                            <div id="type">
                                <h3>Type</h3>
                                <div class="toggle-button">&#8743;</div>
                            </div>
                            <div id="typeOptions">
                                <table class="checkbox-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="grilled" /> Grilled
                                                </label>
                                            </td>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="roasted" checked /> Roasted
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="pan-fried" /> Pan-fried
                                                </label>
                                            </td>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="stir-fried" /> Stir-fried
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="sauteed" /> Sautéed
                                                </label>
                                            </td>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="baked" /> Baked
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="steamed" /> Steamed
                                                </label>
                                            </td>
                                            <td>
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" name="type" value="boiled" /> Boiled
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="filter-group">
                            <div id="grouptime">
                                <h3>
                                    Time
                                </h3>
                                <div class="toggle-button">&#8743;</div>
                            </div>

                            <div id="timeOptions">
                                <input type="range" min="30" max="120" value="30" class="slider" />
                                <div>30 minutes to 50 minutes</div>
                            </div>
                        </div>

                        <div class="filter-group">
                            <div id="rating">
                                <h3>
                                    Rating
                                </h3>
                                <div class="toggle-button" >&#8743;</div>
                            </div>

                            <div id="ratingOptions">
                                <table class="checkbox-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label>
                                                    <input type="checkbox" name="rating" value="1" /> ★
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>
                                                    <input type="checkbox" name="rating" value="2" /> ★★
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>
                                                    <input type="checkbox" name="rating" value="3" checked /> ★★★
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>
                                                    <input type="checkbox" name="rating" value="4" /> ★★★★
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <label>
                                                    <input type="checkbox" name="rating" value="5" /> ★★★★★
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <button class="apply-button">Apply</button>
                    </div>
                </div>
            </div>
            <div id="right">

                <h2>Sory, no results were found for "cakescascsa"</h2>
                <img id="image" src={hinhanh} alt="" />
                <p >We have all your independence Day sweets covered</p>
                <div id="buttons">
                    <button style={style1}>Sweet Cake</button>
                    <button style={style2}>Black Cake</button>
                    <button style={style1}>Pozele Verde</button>
                    <button style={style3}>Healthy Food</button>
                </div>

            </div>
        </div>
    )
}