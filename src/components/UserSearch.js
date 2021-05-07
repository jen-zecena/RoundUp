import React, { createRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import MappedEvents from './MappedEvents';

import { Multiselect } from 'multiselect-react-dropdown';

import { getEventsByTagsAction } from '../actions/eventActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import store from '../store';

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
    componentDidMount() {
        this.tagRef = React.createRef();
    }

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
    console.log("this.multiselectRef1");
    console.log(this.tagRef);
    console.log("This is the state:");
    console.log(store.getState());
    if (this.tagRef.current !== null){
        var tags = this.tagRef.current.state.selectedValues.map((tag) => {
            return tag.name;
       });
        console.log("tags");
        console.log(tags);
       this.props.getEventsByTagsAction({ "tags": tags});
    }
  }


  resetSelectedValues() {
      this.tagRef.current.resetSelectedValues();
    }
    render() {
        console.log(this.props.eventsWithTags);
        return (
        <div className="container">
        <Container>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Form.Label>Filter Posters by Tags</Form.Label>
          <Form.Group>
          <Multiselect
            name='tags'
            ref={this.tagRef}
            placeholder='Tags'
            options={tags} // Options to display in the dropdown
            displayValue="name" // Property name to display in the dropdown options
          />
          </Form.Group>
          <Button variant="danger" type="submit" >
            Search
        </Button>
          </form>
          <br/>
          <br/>
          <MappedEvents/>
        </Container>
        {this.props.eventsWithTags.map((event) => {
          <li>{event.name}</li>
        })}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  events: Object.values(state.events.events),
  eventsWithTags: Object.values(state.events.eventsWithTags)
});


UserSearch = connect(
    mapStateToProps,
    { getEventsByTagsAction }
  )(UserSearch);

  export default reduxForm({
    form: 'searchForm'
  })(UserSearch);
