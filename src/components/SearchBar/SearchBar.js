import React from 'react';
import './SearchBar.css';
import TextField from '@mui/material/TextField';

const axios = require('axios');

class SearchBar extends React.Component {
    state = { userName: '' };
	handleSubmit = async (event) => {
  	    event.preventDefault();
        try {
            const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
            console.log(resp.data);
            this.props.updateUser(resp.data);
            this.setState({ userName: '' });
        } catch {
            console.log("Error");
            this.props.updateUser(NaN);
        }
    };

    render()
    {
        return(
            <form className="Search" onSubmit={this.handleSubmit}>
                <TextField 
                    type="text" 
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username" 
                    required 
                    className = "inputRounded input"
                />
            </form>
        );
    }
}

export default SearchBar;