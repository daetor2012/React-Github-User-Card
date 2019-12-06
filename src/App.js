import React from 'react';
import './App.css';
import axios from "axios";
import CardList from "./CardList";
import UserCard from './UserCard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      axios: [],
      followers: []
    }
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/daetor2012")
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          axios: [res.data]
        })
        })
          
        
      .catch(error => {
        console.log(error);
      })

      axios
        .get("https://api.github.com/users/daetor2012/followers")
        .then(response => {
          console.log(response);
          this.setState({
            ...this.state,
            followers: response.data
          });
        })
        .catch(error => {
          console.log(error);
        })

  }

  
  
  render() {
    
    console.log(this.state);

  return (
    <div className="App">
      <h1>Github User Cards</h1>
      <UserCard axios={this.state.axios} />
      <CardList axios={this.state.axios} followers={this.state.followers} />
    </div>
  );
}
}

export default App;
