import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App(){
    const [searchInfo, setSearchInfo] = useState({
        tags: ""
    });
    
    const [tag,setTags] = useState([]);

    function handleChange(event) {
        const {value } = event.target;
        setSearchInfo(prevValue => {
            return {
              tags: prevValue + "," + value,
            };
        });
    }

    function handleSearch(event) {
        setTags(searchInfo);
        console.log(searchInfo);
    }

        return (
        <Form>
        <Form.Group >
        <Form.Label>Search Posters</Form.Label>
        <Form.Control
              onChange = {handleChange}
              value={searchInfo.tags}
              name="tags" >
        </Form.Control>
        </Form.Group>
        <Button variant="danger" type="submit" onClick = {handleSearch} >
            Search
        </Button>
        </Form>
        );
 
}
      
export default App;