import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component{
        render() {
            return (
            <div style={user}>
                <h1>Hello {this.props.userName}</h1>
                <div id="info">
                    <div>Username: {this.props.userName}</div>
                    <div>Member Since: {this.props.memberSince}</div>
                </div>
                <div id="customizeProfile">
                    <Link id="buttons" to="/customizeProfile"><button><p>Customize Profile</p></button></Link>
                </div>


                <div id="loginMenu">
                    <h4>Menu</h4>
                    <Link id="buttons" to="/credit"><button><p>View Credit</p></button></Link>
                    <Link id="buttons" to="/debit"><button><p>View Debits</p></button></Link>
                </div>
            </div>
            );
        }
    
}

//function 

const user ={
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

export default UserProfile;