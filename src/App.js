import React from 'react';
import './App.css';
import "./components/SearchBar/SearchBar";
import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';
class App extends React.Component{
  state = {
    user: ''
  };
  updateUser = (data) => {
    this.setState({user: data});
    console.log(this.state.user);
  };
  
  render() {
    return (
        <div>
          <div className="Header">
            <img className="Header-svg" src="git.svg" alt="logo"/>
            <h2>Github User Directory</h2>
            <SearchBar updateUser={this.updateUser}/>
          </div>
          <Profile val={this.state.user}/>
        </div>
    );
  }
}

export default App;
