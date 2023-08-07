import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LineGraph from "./LineGraph";
import PositiveBarGraph from "./PositiveBarGraph";
import NegativeBarGraph from "./NegativeBarGraph";
import NeutralBarGraph from "./NeutralBarGraph";
import IrrelevantBarGraph from "./IrrelevantBarChart";
import './Graph.css'
import { Col, Container, Row } from "react-bootstrap";
import Piegraph from "./PieGraph";

function Graph(){
    return(
        <div>
            <h1 className="title">Game's Graph</h1>
            <div className="row">
            <div className="line col-10">
                <LineGraph />
            </div>
            <div className="pie col-2">
                <Piegraph />
            </div>
            </div>

            <p className="sentiment">Sentiments of Each Games</p>
            <div>
                <Container>
                    <Row>
                        <Col><PositiveBarGraph /></Col>
                        <Col><NegativeBarGraph /></Col>
                    </Row>
                    <Row>
                        <Col><NeutralBarGraph /></Col>
                        <Col><IrrelevantBarGraph /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Graph