export const testUser = {
  uID: 2,
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.edu",
  campus: "POM",
  token: 'XXXXXXX'
}

export const testEvent = {
  eID: 1,
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


export const testEvents = [
  { eID: 2, owner: 1, name: "Event2", posterUrl: "testPosterUrl" },
  { eID: 3, owner: 2, name: "Event3", posterUrl: "testPosterUrl" },
  { eID: 4, owner: 2, name: "Event4", posterUrl: "testPosterUrl" },
]

export const testRsvp = {
  email: 'test@rsvp.edu',
  name: 'Test Rsvp',
  eventID: 3,
  time: 'XXXXXXX'
}

export const testRsvps = {
  rsvps: [
    {
      email: 'john@doe.edu',
      name: 'John Doe',
      eventID: 1,
      time: 'XXXXXXX'
    },
    {
      email: 'john@doe.edu',
      name: 'John Doe',
      eventID: 2,
      time: 'XXXXXXX'
    }
  ]
}

export const testExtraRsvps = {
  rsvps: [
    {
      email: 'jane@doe.edu',
      name: 'Jane Doe',
      eventID: 4,
      time: 'XXXXXXX'
    },
    {
      email: 'jane@doe.edu',
      name: 'Jance Doe',
      eventID: 5,
      time: 'XXXXXXX'
    }
  ]
}

export const testRsvpsWithExtraRsvps = {
  rsvps: [
    {
      email: 'john@doe.edu',
      name: 'John Doe',
      eventID: 1,
      time: 'XXXXXXX'
    },
    {
      email: 'john@doe.edu',
      name: 'John Doe',
      eventID: 2,
      time: 'XXXXXXX'
    },
    {
      email: 'jane@doe.edu',
      name: 'Jane Doe',
      eventID: 4,
      time: 'XXXXXXX'
    },
    {
      email: 'jane@doe.edu',
      name: 'Jance Doe',
      eventID: 5,
      time: 'XXXXXXX'
    }
  ]
}

export const testAttendees = [
  { uID: 2, firstName: "John", lastName: "Doe" },
  { uID: 3, firstName: "Jane", lastName: "Doe" }
]

export const testSubscription = { followerID: 1, followedID: 2 };

export const extraSubscription = { followerID: 1, followedID: 0 };

export const testSubscribers = [
  { uID: 2, firstName: "John", lastName: "Doe" },
  { uID: 3, firstName: "Jane", lastName: "Doe" }
]

export const extraSubscriber =   { uID: 1, firstName: "Jane", lastName: "Doom" }

export const testSubscriptions = [
  { followerID: 1, followedID: 2 },
  { followerID: 1, followedID: 3 },
  { followerID: 1, followedID: 4 }
]

export const loadingUserState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
  token: null
}

export const loadedUserState = {
  isLoading: false,
  isAuthenticated: true,
  user: testUser,
  token: testUser.token
}

export const loggedOutUserState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: 'XXXXXXX'
}

export const error = 'Error message';
export const defaultAuthStateWithError = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token'),
  error: error
}

export const loadingUserStateWithError = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: null,
  error: error
}
