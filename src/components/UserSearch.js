import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchResults from './SearchResults';
import { BrowserRouter as Router} from "react-router-dom";

import { Multiselect } from 'multiselect-react-dropdown';

import { getEventsByTagsAction } from '../actions/eventActions';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import store from '../store';

// List of tags that users can use to filter Events
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

/** This component creates and renders the Search Bar. Users can filter events using tags */
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
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Form.Label>Filter Posters by Tags</Form.Label>
          <Multiselect
            className="menu"
            name='tags'
            ref={this.tagRef}
            placeholder='Tags'
            options={tags} // Options to display in the dropdown
            displayValue="name" // Property name to display in the dropdown options
          />
          <Button variant="danger" type="submit" >
            Search
        </Button>
          </form>
          <br/>
          <br/>
          <SearchResults/>
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
