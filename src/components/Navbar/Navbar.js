import React from "react";

const Navbar = () => (

    <div>
        <ul class="nav nav-expand-lg nav-dark indigo justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" >Clicky Game</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" >Click and image to begin!</a>
            </li>
            <li class="nav-item">
                <span class="navbar-text white-text">
                    Score = [0] | Top Score = [0]
                </span>
            </li>
        </ul>

    </div >

)

export default Navbar;