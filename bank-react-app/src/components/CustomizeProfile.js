import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function userSettingsForm() {
  const [formData, setFormData] = useState({
    userName: "",
    backgroundColor: "",
    textColor: "",
  });

  const { userName, backgroundColor, textColor } = formData;

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    history.go(-1);
  };

  return (
    <div style={userSettings}>
      <section className="heading">
        <h1>User Settings</h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div>
            <label>New Username</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={userName}
              onChange={onChange}
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
              className="form-control"
              id="textColor"
              name="textColor"
              value={textColor}
              onChange={onChange}
              placeholder="Enter a hex value"
            />
            </div>
            
          </div>

          <div> <button>Submit</button></div>
        </form>
      </section>
    </div>
  );
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

export default userSettingsForm;