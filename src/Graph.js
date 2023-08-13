import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import LineGraph from "./LineGraph";
// import Piegraph from "./PieGraph";
import PositiveBarGraph from "./PositiveBarGraph";
import NegativeBarGraph from "./NegativeBarGraph";
import NeutralBarGraph from "./NeutralBarGraph";
import IrrelevantBarGraph from "./IrrelevantBarChart";
import './Graph.css'
import NavBar from "./Navbar";

function Graph(){
    return(
        <div>
            <NavBar />
            <div>
                <h1 className="title">Sentiments of Each Games</h1>
                <div class="container">
                    <div class="sentiment widget">
                        <h3>Positive Sentiments</h3>
                        <div class="graph-container">
                            <PositiveBarGraph />
                        </div>
                    </div>
                    <div class="sentiment widget">
                        <h3>Negative Sentiments</h3>
                        <div class="graph-container">
                            <NegativeBarGraph />
                        </div>
                    </div>
                    <div class="sentiment widget">
                        <h3>Neutral Sentiments</h3>
                        <div class="graph-container">
                            <NeutralBarGraph />
                        </div>
                    </div>
                    <div class="sentiment widget">
                        <h3>Irrelevant Sentiments</h3>
                        <div class="graph-container">
                            <IrrelevantBarGraph />
                        </div>
                    </div>
                </div>
                {/* <div className="row"> */}
                    {/* <div className="line">
                        <LineGraph />
                    </div> */}
                    {/* <div className="pie col-2">
                        <Piegraph />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Graph