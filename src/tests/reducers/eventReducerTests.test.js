import {
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  // GET_EVENTS_SUCCESS,
  // GET_EVENTS_FAIL,
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

import eventReducer from '../../reducers/eventReducer';

import {
  error,
  testEvent,
  testEvents,
  testAttendees
} from '../testData';

const defaultEventState = {
  events: [],
  eventsWithTags: [],
  attendees: []
}

const defaultEventStateWithError = {
  events: [],
  eventsWithTags: [],
  attendees: [],
  error: error
}

const testEventState = {
  events: [
    { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
  ],
  eventsWithTags: [],
  attendees: []
}

const testEventStateWithTags = {
  events: [
    { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
  ],
  eventsWithTags: [
    { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
  ],
  attendees: []
}

const testEventStateWithTagsAndExtra = {
  events: [
    { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
    testEvent
  ],
  eventsWithTags: [
    testEvent
  ],
  attendees: []
}


const testEventStateWithError = {
  events: [
    { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
  ],
  eventsWithTags: [],
  attendees: [],
  error: error
}

const detailedEvent = {
  eID: 2,
  owner: 2,
  eventTime: 'XXXXXXX',
  posterUrl: 'testPosterUrl',
  name: 'Event1',
  description: 'Description1',
  location: 'location1',
  popularity: 1,
  status: 'active',
  tags: [
    'tag1',
    'tag2',
    'tag3'
  ]
}

const testEventStateWithExtra = {
  events: [
    { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
    testEvent
  ],
  eventsWithTags: [],
  attendees: []
}

const testEventStateWithNewDetail = {
  events: [
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
    detailedEvent
  ],
  eventsWithTags: [],
  attendees: []
}

const testEventStateMinusOne = {
  events: [
    { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
    { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" }
  ],
  eventsWithTags: [],
  attendees: [],
}

const singleEventState = {
  events: [testEvent],
  eventsWithTags: [],
  attendees: []
}

describe('creatingSuccessfulAddEventAction', () => {
  it('should handle a ADD_EVENT_SUCCESS action', () => {
    expect(
      eventReducer(undefined, { type: ADD_EVENT_SUCCESS, payload: testEvent })
    ).toEqual({
      events: [testEvent],
      eventsWithTags: [],
      attendees: []
    })

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: ADD_EVENT_SUCCESS, payload: testEvent })
    ).toEqual(testEventStateWithExtra)
  })
})

describe('creatingFailedAddEventAction', () => {
  it('should handle ADD_EVENT_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: ADD_EVENT_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: ADD_EVENT_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulGetEventAction', () => {
  it('should handle a GET_EVENT_SUCCESS action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENT_SUCCESS, payload: testEvent })
    ).toEqual(singleEventState)

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: GET_EVENT_SUCCESS, payload: detailedEvent })
    ).toEqual(testEventStateWithNewDetail)
  })
})

describe('creatingFailedGetEventAction', () => {
  it('should handle GET_EVENT_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENT_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: GET_EVENT_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulDeleteEventAction', () => {
  it('should handle a DELETE_EVENT_SUCCESS action', () => {
    expect(
      eventReducer(undefined, { type: DELETE_EVENT_SUCCESS, payload: testEvent })
    ).toEqual(defaultEventState)

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: DELETE_EVENT_SUCCESS, payload: detailedEvent })
    ).toEqual(testEventStateMinusOne)
  })
})

describe('creatingFailedDeleteEventAction', () => {
  it('should handle DELETE_EVENT_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: DELETE_EVENT_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: DELETE_EVENT_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulUpdateEventAction', () => {
  it('should handle a UPDATE_EVENT_SUCCESS action', () => {
    expect(
      eventReducer(undefined, { type: UPDATE_EVENT_SUCCESS, payload: testEvent })
    ).toEqual(singleEventState)

    expect(
      eventReducer(JSON.parse(JSON.stringify(testEventState)), { type: UPDATE_EVENT_SUCCESS, payload: detailedEvent })
    ).toEqual(testEventStateWithNewDetail)
  })
})

describe('creatingFailedUpdateEventAction', () => {
  it('should handle UPDATE_EVENT_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: UPDATE_EVENT_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(testEventState, { type: UPDATE_EVENT_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulGetEventAttendeesAction', () => {
  it('should handle a GET_EVENT_ATTENDEES_SUCCESS action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENT_ATTENDEES_SUCCESS, payload: testAttendees })
    ).toEqual({
      events: [],
      eventsWithTags: [],
      attendees: testAttendees
    })

    expect(
      eventReducer(testEventState, { type: GET_EVENT_ATTENDEES_SUCCESS, payload: [] })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENT_ATTENDEES_SUCCESS, payload: testAttendees })
    ).toEqual({
      ...testEventState,
      attendees: testAttendees
    })
  })
})

describe('creatingFailedGetEventAttendeesAction', () => {
  it('should handle GET_EVENT_ATTENDEES_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENT_ATTENDEES_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(testEventState, { type: GET_EVENT_ATTENDEES_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulGetEventsByTagsAction', () => {
  it('should handle a GET_EVENTS_BY_TAGS_SUCCESS action', () => {

    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_TAGS_SUCCESS, payload: testEvents })
    ).toEqual(testEventStateWithTags)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_TAGS_SUCCESS, payload: [] })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_TAGS_SUCCESS, payload: [testEvent] })
    ).toEqual(testEventStateWithTagsAndExtra)
  })
})

describe('creatingFailedGetEventsByTagsAction', () => {
  it('should handle GET_EVENTS_BY_TAGS_FAIL action', () => {

    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_TAGS_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_TAGS_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulGetEventsByNameAction', () => {
  it('should handle a GET_EVENTS_BY_NAME_SUCCESS action', () => {

    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_NAME_SUCCESS, payload: testEvents })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_NAME_SUCCESS, payload: [] })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_NAME_SUCCESS, payload: [testEvent] })
    ).toEqual(testEventStateWithExtra)
  })
})

describe('creatingFailedGetEventsByNameAction', () => {
  it('should handle GET_EVENTS_BY_NAME_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_NAME_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_NAME_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulGetEventsByOwnerAction', () => {
  it('should handle a GET_EVENTS_BY_OWNER_SUCCESS action', () => {

    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_OWNER_SUCCESS, payload: testEvents })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_OWNER_SUCCESS, payload: [] })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_OWNER_SUCCESS, payload: [testEvent] })
    ).toEqual(testEventStateWithExtra)
  })
})

describe('creatingFailedGetEventsByOwnerAction', () => {
  it('should handle GET_EVENTS_BY_OWNER_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_OWNER_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_OWNER_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})

describe('creatingSuccessfulGetEventsByTimeAction', () => {
  it('should handle a GET_EVENTS_BY_TIME_SUCCESS action', () => {

    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_TIME_SUCCESS, payload: testEvents })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_TIME_SUCCESS, payload: [] })
    ).toEqual(testEventState)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_TIME_SUCCESS, payload: [testEvent] })
    ).toEqual(testEventStateWithExtra)
  })
})

describe('creatingFailedGetEventsByTimeAction', () => {
  it('should handle GET_EVENTS_BY_TIME_FAIL action', () => {
    expect(
      eventReducer(undefined, { type: GET_EVENTS_BY_TIME_FAIL, error: error})
    ).toEqual(defaultEventStateWithError)

    expect(
      eventReducer(testEventState, { type: GET_EVENTS_BY_TIME_FAIL, error: error})
    ).toEqual(testEventStateWithError)
  })
})
