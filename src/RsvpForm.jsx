import React, { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    userID: "",
    eventID: ""
  });

  const [user,setUser] = useState([]);

  console.log(userInfo);
  console.log(user);
  
  function handleChange(event) {
    const { name, value } = event.target;

    setUserInfo(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function sendUserRSVP(e) {
    setUser(userInfo);
    // user and userInfo now both hold the user data that we
    // want to send in the PUT erquest to the API to let it 
    // know that the user has subscribed
    // on the click we should call the function for the PUT Request
  }

  return (
    <div className="container">
      <h1>
        RSVP Form
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={userInfo.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={userInfo.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={userInfo.email}
          name="email"
          placeholder="Email"
        />
        <button onClick = {sendUserRSVP} >Submit</button>
      </form>
      
    </div>
  );
}

export default App;
