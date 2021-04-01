import React, { useState } from "react";

function App2() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver,setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  return (
    <div>
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your Name?" />
      <button 
        style={{ backgroundColor: "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App2;

// import React from "react";
// import ReactDOM from "react-dom";
// import events, {useEvents} from "./data";

// const [event1, event2] = events;
// const {id: event1Id ,ownerID: event1OwnerId, name: event1Name, date: event1Date, eventTime:event1Time, location:event1Location, tags:event1Tags} = event1;
// const {id: event2Id ,ownerID: event2OwnerId, name: event2Name, date: event2Date, eventTime:event2Time, location:event2Location, tags:event2Tags} = event2;

// // you can add default values by setting a var like name = "defaltValue",location, etc...
// // you can do nesting destructuring!

// const [eventName, getEventLocation] = useEvents(event1);

// ReactDOM.render(
//     <table>
//       <tr>
//         <th>Event Name</th>
//         <th>Location</th>
//         <th>Time</th>
//       </tr>
//       <tr>
//         <td>{event1Name}</td>
//         <td>{event1Location}</td>
//         <td>{Event1Time}</td>
//       </tr>
//       <tr>
//         <td>{event2Name}</td>
//         <td>{event2Location}</td>
//         <td>{event2Time}</td>
//       </tr>
//     </table>,
//     document.getElementById("root")
//   );
