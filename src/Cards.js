import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./index.css";

function Cards(props) {

    return (
        <div>
            <Card>
                <CardImg width="50%" src={props.avatar} alt="User's Picture" />
                <CardBody>
                    <CardTitle>Username: {props.username}</CardTitle>
                    <CardText>Github Profile: {props.github}</CardText>
                </CardBody>
            </Card>
        </div>
    )
} 

export default Cards;