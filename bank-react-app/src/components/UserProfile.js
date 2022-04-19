import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import useCollapse from 'react-collapsed';
import { useState } from "react";

function UserProfile(){
        //const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
        let uName = "Eric"
        let memSince = "04/29/96";
        let backColor = "blue";
        let texColor = "#000000";
        const [formData, setFormData] = useState({
            userName: "",
            backgroundColor: "",
            textColor:"",
            memberSince:"",
          });
        const { userName, backgroundColor, textColor, memberSince} = formData;
        
        const [ isExpanded, setExpanded ] = useState(false);
        const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

        function handleOnClick() {
            // Do more stuff with the click event!
            // Or, set isExpanded conditionally 
            setExpanded(!isExpanded);
        }
        const onChange = (e) => {
            setFormData((prevState) => {
              return {
                ...prevState,
                [e.target.name]: e.target.value,
              };
            });
          };
        

        const onSubmit = async (e) => {
            setExpanded(!isExpanded);
            e.preventDefault();
            
            var mingzi= document.getElementsByClassName("userNameform-control");
            
            const headerName = document.getElementById("starterInfo_username");
            const firstheaderName =  document.getElementById("firstUserNameUse");
            if (mingzi.length > 0) {
                headerName.textContent = "Username: " +  mingzi[0].value;
                firstheaderName.textContent = "Hello " + mingzi[0].value;
            }

            var colorForBackground = document.getElementsByClassName("backColorform-control");
            if(colorForBackground.length > 0){
                document.getElementById("changeBackground").style.backgroundColor = colorForBackground[0].value;
            }

            var colorForText = document.getElementsByClassName("textColorform-control");
            if(colorForText.length > 0){
                document.getElementById("changeBackground").style.color = colorForText[0].value;
                document.getElementById("callapsableButton").style.color = colorForText[0].value;
                document.getElementById("buttons1").style.color = colorForText[0].value;
                document.getElementById("buttons2").style.color = colorForText[0].value;
            }
            
            
            //if(userName.formData!=null){uName = userName.formData;}
            //console.log(uName);

            
        };
            return (
                
            <body id = "changeBackground" style = {{backgroundColor: "white",color: "black",height:"1000px",}} >
                <div style={user}>
                    <h1 id = "firstUserNameUse" >Hello {uName}</h1>
                    <div id="starterInfo">
                        <div id = "starterInfo_username">Username: {uName}</div>
                        <div>Member Since: {memSince}</div>
                    </div>
                    <div id="customizeProfileCallapse">
                        <div className ="userSettings" {...getToggleProps({onClick: handleOnClick})} style = {{marginTop: "10px"}}>
                        <button id = "callapsableButton">{isExpanded ? 'Collapse' : 'User Settings'}</button>

                        </div>
                        <div {...getCollapseProps()}>
                            <div className="content">
                            <div className="userSettings" >
                            <section className="heading">
                                <h1>User Settings</h1>
                            </section>

                            <section className="thisform">
                                <form onSubmit={onSubmit}>
                                <div>
                                    <label>New Username</label>
                                    <input
                                    type="text"
                                    className="userNameform-control"
                                    id="userName"
                                    name="userName"
                                    value= {userName}
                                    onChange={onChange}
                                    placeholder="Enter a new username"
                                    />
                                </div>
                                <div>
                                    <label>Background Color</label>
                                    <input
                                    type="text"
                                    className="backColorform-control"
                                    id="backgroundColor"
                                    name="backgroundColor"
                                    value={backgroundColor}
                                    onChange={onChange}
                                    placeholder="Enter a hex value"
                                    />
                                </div>
                                <div>
                                    <label>Text Color</label>
                                    <div>
                                    <input
                                    type="text"
                                    className="textColorform-control"
                                    id="textColor"
                                    name="textColor"
                                    value={textColor}
                                    onChange={onChange}
                                    placeholder="Enter a hex value"
                                    />
                                    </div>
                                    
                                </div>

                    <div style = {{marginTop: "10px"}}>
                        <button>Submit</button>
                     </div>
                </form>
            </section>
            </div>
                            </div>
                        </div>

                    </div>


                    <div id="loginMenu">
                        <h4>Menu</h4>
                        <Link id="buttons" to="/credit"><button><p id = "buttons1">View Credit</p></button></Link>
                        <Link id="buttons" to="/debit"><button><p id = "buttons2">View Debits</p></button></Link>
                    </div>
                </div>
            </body>
                
            );
        
    
}





const user ={
    width: "300px",
    backgroundColor: "beige",
    borderRadius: "10%",
    //boxShadow: "10px 10px 10px #dbdbd2",
    paddingLeft: "20px",
    paddingTop: "10px",
    paddingRight: "20px",
    paddingBottom: "10px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }

  const userSettings ={
    textAlign:"center",
    backgroundColor: "grey",
  }

export default UserProfile;