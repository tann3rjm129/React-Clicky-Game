import React from "react";
import "./Thumbnails.css";

const Thumbnails = props => (

    <div>


        <div className="col-md-12 marginAdjust">

            <div className="card" onClick={() => props.setClicked(props.id)}>
                {/* Where the character images would be placed @ src */}
                <img src={props.image} alt={props.name} class="img-thumbnail img imageBackground"></img>

            </div>

        </div>

    </div>

)

export default Thumbnails;
