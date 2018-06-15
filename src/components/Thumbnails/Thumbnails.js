import React from "react";
import "./Thumbnails.css";

const Thumbnails = props => (

    <div>



        <div className="col-md-4">

            <div className="imgContainer">
                {/* Where the character images would be placed @ src */}
                <img src={props.image} alt={props.name} class="img-thumbnail img"></img>

            </div>
        </div>



    </div>

)

export default Thumbnails;
