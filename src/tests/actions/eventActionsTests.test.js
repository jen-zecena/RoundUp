import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as eventActions from '../../actions/eventActions';

import { API_REQUEST } from '../../actions/types/commonActionTypes';

import {
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  GET_EVENTS_BY_TAGS_SUCCESS,
  GET_EVENTS_BY_TAGS_FAIL,
  GET_EVENTS_BY_NAME_SUCCESS,
  GET_EVENTS_BY_NAME_FAIL,
  GET_EVENTS_BY_OWNER_SUCCESS,
  GET_EVENTS_BY_OWNER_FAIL,
  GET_EVENTS_BY_TIME_SUCCESS,
  GET_EVENTS_BY_TIME_FAIL,
  GET_EVENT_ATTENDEES_SUCCESS,
  GET_EVENT_ATTENDEES_FAIL
} from '../../actions/types/eventActionTypes';

import {
  testEvent,
  testEvents, testAttendees
} from '../testData';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/*
  Testing the add event action by checking to see what it does with different types of http responses
*/
describe('creatingAddEventAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates ADD_EVENT_SUCCESS after successfully adding event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testEvent
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_EVENT_SUCCESS,
        payload: testEvent
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.addEventAction(2, 'XXXXXXX', 'testPosterUrl', 'Event1',
      'Description1', 'location1', [ 'tag1', 'tag2', 'tag3'])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates ADD_EVENT_FAIL after failing to add event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.addEventAction(2, 'XXXXXXX', 'testPosterUrl', 'Event1',
      'Description1', 'location1', [ 'tag1', 'tag2', 'tag3'])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the addEvent action by checking to see what it does with different types of http responses
*/
describe('creatingAddEventActionWithIncorrectParameters', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('creates ADD_EVENT_FAIL after failing to add event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.addEventAction(2, '', '', 'Event1',
      'Description1', 'location1', [ 'tag1', 'tag2', 'tag3'])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the get event action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENT_SUCCESS after successfully retrieving event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testEvent
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENT_SUCCESS,
        payload: testEvent
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventAction(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_EVENT_FAIL after failing to retrieve event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventAction(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the get event action by checking to see what it does with different types of http responses
*/
describe('creatingGetNonexistentEventAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENT_FAIL after failing to retrieve event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventAction(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});



/*
  Testing the update event action by checking to see what it does with different types of http responses
*/
describe('creatingUpdateEventAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates UPDATE_EVENT_SUCCESS after successfully updating event information', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testEvent
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: UPDATE_EVENT_SUCCESS,
        payload: testEvent
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.updateEventAction(1, 2, 'XXXXXXX', 'testPosterUrl', 'Event1',
      'Description1', 'location1', [ 'tag1', 'tag2', 'tag3'])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates UPDATE_EVENT_FAIL after failing to update event information', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: UPDATE_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.updateEventAction(1, 2, 'XXXXXXX', 'testPosterUrl', 'Event1',
      'Description1', 'location1', [ 'tag1', 'tag2', 'tag3'])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the update event action by checking to see what it does with different types of http responses
*/
describe('creatingUpdateNonexistentEventAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates UPDATE_EVENT_FAIL after failing to update event information', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: UPDATE_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.updateEventAction(999, 2, 'XXXXXXX', 'testPosterUrl', 'Event1',
      'Description1', 'location1', [ 'tag1', 'tag2', 'tag3'])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});



/*
  Testing the delete event action by checking to see what it does with different types of http responses
*/
describe('creatingDeleteEventActionAsOwner', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates DELETE_EVENT_SUCCESS after successfully deleting event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testEvent
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_EVENT_SUCCESS,
        payload: testEvent
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.deleteEventAction(1, 2)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates DELETE_EVENT_FAIL after failing to delete event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.deleteEventAction(1, 2)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the delete event action by checking to see what it does with different types of http responses
*/
describe('creatingDeleteEventActionAsNonOwner', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates DELETE_EVENT_FAIL after failing to delete event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_EVENT_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.deleteEventAction(1, 5)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the getEventByTags action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByTagsAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_TAGS_SUCCESS after successfully retrieving events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {events: testEvents}
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_TAGS_SUCCESS,
        payload: testEvents
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByTagsAction({tags:['tag1', 'tag2'], status:'active'})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});

/*
  Testing the getEventByTags action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByNullTagsAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_TAGS_FAIL after failing to add event', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_TAGS_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByTagsAction({tags:null, status:'active'})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the getEventByName action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByNameAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_NAME_SUCCESS after successfully retrieving events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {events: testEvents}
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_NAME_SUCCESS,
        payload: testEvents
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByNameAction('Event', 'active')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the getEventByName action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByNullNameAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_NAME_FAIL after failing to retrieve events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_NAME_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByNameAction(null, 'active')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the getEventByOwner action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByOwnerAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_OWNER_SUCCESS after successfully retrieving events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {events: testEvents}
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_OWNER_SUCCESS,
        payload: testEvents
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByOwnerAction(1, 'active')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the getEventByOwner action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByNullOwnerAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_OWNER_FAIL after failing to retrieve events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_OWNER_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByOwnerAction(null, 'active')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the getEventByTime action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByTimeAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENTS_BY_TIME_SUCCESS after successfully retrieving events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {events: testEvents}
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_TIME_SUCCESS,
        payload: testEvents
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByTimeAction('XXXXXXA', 'XXXXXXX')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the getEventByTime action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventsByNullTimeAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('creates GET_EVENTS_BY_TIME_FAIL after failing to retrieve events', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENTS_BY_TIME_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ events: {}})
    return store.dispatch(eventActions.getEventsByTimeAction(null, 'XXXXXXX')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/*
  Testing the getEventAttendees action by checking to see what it does with different types of http responses
*/
describe('creatingGetEventAttendeesAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENT_ATTENDEES_SUCCESS after successfully retrieving event attendees', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testAttendees
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENT_ATTENDEES_SUCCESS,
        payload: testAttendees
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(eventActions.getEventAttendeesAction(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


/*
  Testing the getEventAttendees action by checking to see what it does with different types of http responses
*/
describe('creatingGetNullEventAttendeesAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_EVENT_ATTENDEES_FAIL after failing to retrieve event attendees', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_EVENT_ATTENDEES_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(eventActions.getEventAttendeesAction(null)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
