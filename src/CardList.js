import React from "react";
import Cards from "./Cards";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        
    }

    render() {

        return (
            <div>
                {this.props.followers.map(index => {
                    return (
                        <Cards avatar={index.avatar_url} username={index.login} github={index.html_url} />
                    )
                })}
            </div>
        )
    }
}

export default CardList;