import React, {Component} from 'react';
//import React, { useState } from 'react';
//import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import users from '../users.json';

class UserSettingsForm extends Component{
    state = {
        id : "",
        userName: "",
        backgroundColor: "",
        textColor: "",
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }
    //const { userName, backgroundColor, textColor } = formData;

    
    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          //name: this.state.name
          //id : "",
          userName: this.state.userName,
          backgroundColor: this.state.backgroundColor,
          textColor: this.state.textColor,
        };
        axios.delete('../users.json/1')
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        axios.post('../users.json', { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        //const history = useHistory();
        //history.go(-1);
    }
    
    
    //const axios = require('axios');
    
    render(){
        return (
            <div style={userSettings}>
            <section className="heading">
                <h1>User Settings</h1>
            </section>

            <section className="form">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>New Username</label>
                    <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    //value={userName}
                    onChange={this.handleChange}
                    placeholder="Enter a new username"
                    />
                </div>
                <div>
                    <label>Background Color</label>
                    <input
                    type="text"
                    className="form-control"
                    id="backgroundColor"
                    name="backgroundColor"
                    //value={backgroundColor}
                    onChange={this.handleChange}
                    placeholder="Enter a hex value"
                    />
                </div>
                <div>
                    <label>Text Color</label>
                    <div>
                    <input
                    type="text"
                    className="form-control"
                    id="textColor"
                    name="textColor"
                    //value={textColor}
                    onChange={this.handleChange}
                    placeholder="Enter a hex value"
                    />
                    </div>
                    
                </div>

                <Link to = "/userProfile"> <button>Submit</button></Link>
                </form>
            </section>
            </div>
        );
    }
}

const userSettings ={
    width: "300px",
    backgroundColor: "beige",
    borderRadius: "10%",
    boxShadow: "10px 10px 10px #dbdbd2",
    paddingLeft: "20px",
    paddingTop: "10px",
    paddingRight: "20px",
    paddingBottom: "10px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }

export default UserSettingsForm;
