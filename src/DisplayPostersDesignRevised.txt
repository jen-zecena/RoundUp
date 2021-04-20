import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";
import UserSearch from "./UserSearch"

/**
This component displays event posters that match a user's search tags in chronological order**/


function DisplayPosters(eventsListProps){
	/**
	@param eventsListProps: the props that this component will receive from the UserSearch parent component
	will contain the list of events that matched a user's search criteria

	This will be the main function of the component and inner functions will have access to the eventsListProps
	Passing in the eventsListProps replaces the GET Request to the the data base since the UserSeach component will
	make that request and then pass the response to this component in the eventsListProps.
	**/

	function RemovePastEvents(eventsList){
	    /**
	    @param eventsList: eventsList is a name for the props that will be passed into this function
	    @return: and updated eventsList
	    this function will user the filter function to remove any events that have already passed by
	    checking to see if the date listed as one of the event's properties is greater than the current date
	    if it is bigger the event will be kept, if not it will be removed
	    **/
	}

	function sortEvents(updatedEventsList){
	    /**
	    @param updatedEventsList: updatedEventsList is a name for the props that will be passed into this function
	    @return the final events list
	    this function will use the date property of the events to sort events in the events list in chronological order.
	    events that are happening soon will be first
	    **/

	    // Will use an event's date property and a sorting algorithim to sort events in chronological order
	    // Merge sort is likely the algorithm that will be used
	}

	function EventPosterCard (finalEventsList){
	    /**
	    @param finalEventsList: finalEventsList is a name for the props that will be passed into this function
	    @return: html code with embeded javascript that references properties in the prop passed into this function
	    It will include the structure and content of a Event Poster Card

	    The react component that this function returns will be populated with different data depending on the props
	    passed into it. This component is very modular and we will display many of them in our final events display page

	    This component will be defined in its own file in the actual implementation and then imported into the main component file
	    **/

	    // use Bootstrap to create a card that can hold all necessary event info
	    // If Bootstrap integration is not successful use plain HTML and CSS styling
	}

	function retreivePoster(imgUrl){
		/**
		@param imgUrl: url of the poster image that is stored in the S3 bucket. This url will be passed to this component in the
		eventsListProps prop.

		This function will retrieve a copy of the file in the given url. The copy will be returned
  	to be rendered by our application.
		**/
	}

	function mapEvents(finalEventsList){
	    /**
	    @param finalEventsList: finalEventsList is a name for the props that will be passed into this function
	    @return: a series of cards in a dictionary that each contain a poster's unique event data

	    we will use this function to map the data of each event in the final events list object onto an EventCard.
	    All of the EventCards will be stored in a description list
	    **/

	    // populate event card data fields with correct info as you iterate through the map
	}

}


function App(){
/**
    @param: no parameters
    @return: html code with embeded JavaScript that will describe the structure and data of all of the components
    displayed in the Events Display page

    This will be our main react component and in the actual implementation will be in its own file. When it is in its
    own file it will import all necessary components and modules
    **/

}

//used to render everything in the App component onto the screen, usually in the index.js file of a react app
ReactDOM.render(<App />, document.getElementById("root"));
