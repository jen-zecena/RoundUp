import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import DisplayEventsPage from './DisplayEventsPage';


const Parent = () => {
  const [eventsList, setEventList] = useState([{
    id: 1,
    ownerID: "id",
    name: "Event 1",
    date: "1/5/21",
    time: "10:25am",
    location: "CMC",
    description: "event 1 description is going to go here.",
    tags: ["CMC", "EconDepartment"]
  }]);

  function handleEventsListChange(eventsL){
    setEventList(eventsL);
  }

  return(
      <div>
        < DisplayEventsPage
            handleEventsListChange = {handleEventsListChange}
            eventsList = {eventsList}
        />
      </div>


    );

};



// class Parent extends React.Component{
//   constructor (){
//     super();
//     this.handleEventsListChange = this.handleEventsListChange.bind(this);
//   }
//
//   state = {
//     events:[]
//   };
//
//   handleEventsListChange(eventL){
//     eventL.preventDefault();
//     this.setState({events: eventL});
//   }
//   // In the actual component this is going to be the GET request and the response
//   // Will be used to set the initial eventsList
//   //   useEffect(() => {
//   //   fetch('http://127.0.0.1:8000/api/v1/products/all')
//   //     .then((res) => res.json())
//   //     .then((data) => setEventssList([...data]))
//   // }, []);
//
//   // But for now I will use my own data to set the initial Events list
//   // const events = [
//   //     {
//   //         userId: 1,
//   //         eventTime: "2020-04-04 14:55:10.888",
//   //         posterUrl: "",
//   //         name: "Event 1",
//   //         description: "event 1 description is going to go here.",
//   //         location: "CMC",
//   //         tags: ["CMC", "EconDepartment"]
//   //     }
//   //   ];
//
//   render(){
//     return(
//     <div>
//       < DisplayEventsPage
//           handleEventsListChange = {this.handleEventsListChange}
//       />
//     </div>
//
//
//   );};
//
//
//
// };

export default Parent;
