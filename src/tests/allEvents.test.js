import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import EventsPage from '../components/AllEvents';
import { addRsvpAction } from '../actions/rsvpActions';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { findByTestAttr, testStore} from './utils.js';
import shallow from 'enzyme';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Provider store={store}>
    <EventsPage/>
</Provider>).childAt(0).dive();
  console.log(wrapper.debug());
  return wrapper;
  
} 

describe('All Events Component',() =>{
  let wrapper;
  beforeEach(()=>{
    const initialState = {
      form: {},
      auth: {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      },
      events: {
        events: [
          {
            owner: 1,
            eID: 32,
            posterUrl: 'https://roundupposters.s3.amazonaws.com/poster6.jpg',
            popularity: 0,
            eventTime: 1620709140000,
            name: 'Event 8',
            description: 'This is the test description for an event',
            location: 'cmc',
            status: 'active',
            tags: [
              'Biology',
              'Economics'
            ]
          },
          {
            owner: 1,
            eID: 1,
            posterUrl: 'no poster',
            name: 'Test Event'
          },
          {
            owner: 1,
            eID: 44,
            posterUrl: 'https://roundupposters.s3.amazonaws.com/reunion2021_webbanners1500_x_866_2.jpg',
            name: 'Reunion'
          },
          {
            owner: 1,
            eID: 34,
            posterUrl: 'https://roundupposters.s3.amazonaws.com/poster7.jpg',
            name: 'Event'
          },
          {
            owner: 1,
            eID: 35,
            posterUrl: 'https://roundupposters.s3.amazonaws.com/poster1.jpg',
            name: '5C Event'
          }
        ],
        eventsWithTags: [],
        attendees: []
      },
      rsvps: {
        rsvps: []
      },
      subscriptions: {
        subscriptions: [],
        subscribers: []
      }

    }
    wrapper = setUp(initialState)
  });
  it('should render without errors',() => {
    const component = findByTestAttr(wrapper, 'allEventsComponent');
    expect(component.length).toBe(1);
  })
});

// const mockStore = configureStore([]);

// describe('My Connected React-Redux Component', () => {
//     let store;
//     let component;
   
//     beforeEach(() => {
//       store = mockStore({
  //       form: {},
  // auth: {
  //   isLoading: false,
  //   isAuthenticated: false,
  //   user: null,
  //   token: null
  // },
  // events: {
  //   events: [
  //     {
  //       owner: 1,
  //       eID: 32,
  //       posterUrl: 'https://roundupposters.s3.amazonaws.com/poster6.jpg',
  //       popularity: 0,
  //       eventTime: 1620709140000,
  //       name: 'Event 8',
  //       description: 'This is the test description for an event',
  //       location: 'cmc',
  //       status: 'active',
  //       tags: [
  //         'Biology',
  //         'Economics'
  //       ]
  //     },
  //     {
  //       owner: 1,
  //       eID: 1,
  //       posterUrl: 'no poster',
  //       name: 'Test Event'
  //     },
  //     {
  //       owner: 1,
  //       eID: 44,
  //       posterUrl: 'https://roundupposters.s3.amazonaws.com/reunion2021_webbanners1500_x_866_2.jpg',
  //       name: 'Reunion'
  //     },
  //     {
  //       owner: 1,
  //       eID: 34,
  //       posterUrl: 'https://roundupposters.s3.amazonaws.com/poster7.jpg',
  //       name: 'Event'
  //     },
  //     {
  //       owner: 1,
  //       eID: 35,
  //       posterUrl: 'https://roundupposters.s3.amazonaws.com/poster1.jpg',
  //       name: '5C Event'
  //     }
  //   ],
  //   eventsWithTags: [],
  //   attendees: []
  // },
  // rsvps: {
  //   rsvps: []
  // },
  // subscriptions: {
  //   subscriptions: [],
  //   subscribers: []
  // }
//       });

//       store.dispatch = jest.fn();

//       component = renderer.create(
//           <Provider store={store}>
//               <EventsPage/>
//           </Provider>
//       );
//     });
   
//     it('should render with given state from Redux store', () => {
//         expect(component.toJSON()).toMatchSnapshot();
//     });
    
//     it('component renders correctly', () => {
//         //expect(component).toContain("<h1>RSVP Form</h1>").toBeTruthy();
//         expect(component).toContain("div.allevents").toBeTruthy();
//         expect(component).toContain("h1.header").toBeTruthy();
//         expect(component).toContain("dl.dictionary").toBeTruthy();        
//     });

//     // This one should work once rsvp works again
//     // it('should dispatch an action on button click', () => {
//     //     renderer.act(() => {
//     //         component.root.findByType('button').props.onSubmit();
//     //       });
       
//     //       expect(store.dispatch).toHaveBeenCalledTimes(1);
//     //       expect(store.dispatch).toHaveBeenCalledWith(
//     //         addRsvpAction({ payload: "success" }) //update this payload with correct one 
//     //       );
        
//     // });
//   });
// //   https://jestjs.io/docs/expect this might contain other helpful examples of expect tests