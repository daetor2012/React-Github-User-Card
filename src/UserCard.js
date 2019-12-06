import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./index.css";

function UserCard(props) {

    return (
        <div>
            {props.axios.map(index => {
                return (
                    <Card>
                    <CardImg width="50%" src={index.avatar_url} alt="User's Picture" />
                    <CardBody>
                        <CardTitle>Username: {index.login}</CardTitle>
                        <CardText>Github Profile: {index.html_url}</CardText>
                    </CardBody>
                </Card>
                )
            })}
            
        </div>
    )
} 

export default UserCard;