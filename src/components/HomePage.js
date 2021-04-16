import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import EventPage from "./EventPage";

function HomePage() {
  return (
    <div>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  </Navbar>
   <EventPage />
   </div>
  );
}

export default HomePage;
