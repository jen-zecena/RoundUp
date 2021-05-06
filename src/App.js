import React from 'react'
import AllEvents from './components/AllEvents';
import UploadEvent2 from './components/UploadEvent2';


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>This is the Homepage!</h1>
      <UploadEvent2/>
      <AllEvents/>
    </div>
  );
}

export default App;
