import React from "react";
import "./Jumbotron.css";


const Jumbotron = () => (

    <div>
        <div class="jumbotron backgroundImage JumboH text-center">

            <div className="card instructionMargin headerMargin">
                <h1 class="h1-reponsive mb-3 instructionMargin font"><strong>
                    Click a South Park Character Below to Start!
            </strong></h1>
                <p class="lead font2">The goal of the game is to click each of your favortie South Park characters below only once to earn a point. Be careful because once you click an image they shuffle. Click a charcter more than once and you start over. Good Luck!</p>

            </div>
        </div>
    </div>


);

export default Jumbotron;
