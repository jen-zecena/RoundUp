import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Multiselect } from 'multiselect-react-dropdown';

import { getEventsByTagsAction } from '../actions/eventActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const tags =  [{name: 'Africana Studies'},
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
                {name: 'Geology'}
];

class UserSearch extends React.Component {

    renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => {
        return (
          <div className={`form-group ${touched && error ? 'error' : ''}`}>
            <label>{label}</label>
            {type === 'hidden'
              ?
            <input {...input} className='form-control' type={type} placeholder={placeholder} value={value} />
              :
            <input {...input} className='form-control' type={type} placeholder={placeholder} />
            }
            {touched && error && (
              <span className='text text-danger'>{error}</span>
            )}
          </div>
        );
      };
    
  onSubmit = formValues => {
    this.props.getEventsByTagsAction({...formValues});
  }

    render() {
        
        return (
        <div className="container">
        <Container>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
          <Form.Label>Filter Posters by Tags</Form.Label>
        <Multiselect
            options={tags} // Options to display in the dropdown
           // selectedValues={searchInfo.selectedValue} // Preselected value to persist in dropdown
           // onSelect={onSelect} // Function will trigger on select event
           // onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
        <Button variant="danger" type="submit">
              Submit
        </Button>
          
          </form>
        </Container>
      </div>
    );
  }
}

  
console.log(getEventsByTagsAction);
UserSearch = connect(
    null,
    { getEventsByTagsAction }
  )(UserSearch);
  
  export default reduxForm({
    form: 'search'
  })(UserSearch);