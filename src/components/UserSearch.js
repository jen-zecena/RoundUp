import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Multiselect } from 'multiselect-react-dropdown';


function App(){

    
    const [searchInfo, setSearchInfo] = useState({
        tags: [{name: 'Africana Studies'},
                {name: 'American Studies'},
                {name: 'Anthropology'},
                {name: 'Art'},
                {name: 'Art History'},
                {name: 'Asian American Studies'},
                {name: 'Asian Languages & Literatures'},
                {name: 'Asian Studies'},
                {name: 'Biology'},
                {name: 'Chemistry'},
                {name: 'Chicana/o-Latina/o Studies'},
                {name: 'Chinese'},
                {name: 'Classics'},
                {name: 'Computer Science'},
                {name: 'Classics'},
                {name: 'Economics'},
                {name: 'English'},
                {name: 'Environmental Analysis'},
                {name: 'French'},
                {name: 'Gender & Womens Studies'},
                {name: 'Geology'},

            ]
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

    function onSelect(){
        console.log("select");
    }

    function onRemove(){
        console.log("remove");
    }

        return (
        <Form>
        <Form.Group >
        <Form.Label>Search Posters</Form.Label>
        </Form.Group>
        <Multiselect
            options={searchInfo.tags} // Options to display in the dropdown
            selectedValues={searchInfo.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
        <Button variant="danger" type="submit" onClick = {handleSearch} >
            Search
        </Button>
        </Form>
        );
 
}
      
export default App;

