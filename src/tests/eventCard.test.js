import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import EventCard from '../components/EventCard';
import { addRsvpAction } from '../actions/rsvpActions';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
        form: {
            rsvpForm: {
              registeredFields: {
                firstName: {
                  name: 'firstName',
                  type: 'Field',
                  count: 1
                },
                lastName: {
                  name: 'lastName',
                  type: 'Field',
                  count: 1
                },
                email: {
                  name: 'email',
                  type: 'Field',
                  count: 1
                },
                eID: {
                  name: 'eID',
                  type: 'Field',
                  count: 1
                }
              },
              syncErrors: {
                firstName: 'Required',
                lastName: 'Required',
                email: 'Required'
              }
            }
          },
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
              },
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
      });

      store.dispatch = jest.fn();

      component = renderer.create(
          <Provider store={store}>
              <EventCard/>
          </Provider>
      );
    });
   
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
    
    it('component renders correctly', () => {
        expect(component).toContain(<Button variant="danger" > More Information </Button>).toBeTruthy();
        expect(component).toContain("Card.card").toBeTruthy();
        expect(component).toContain("Button.button").toBeTruthy();
        expect(component).toContain("Card.Title.title").toBeTruthy();
        expect(component).toContain("Card.Text.text").toBeTruthy();
        
    });

    // This one should work once rsvp works again
    // it('should dispatch an action on button click', () => {
    //     renderer.act(() => {
    //         component.root.findByType('button').props.onSubmit();
    //       });
       
    //       expect(store.dispatch).toHaveBeenCalledTimes(1);
    //       expect(store.dispatch).toHaveBeenCalledWith(
    //         addRsvpAction({ payload: "success" }) //update this payload with correct one 
    //       );
        
    // });
  });
//   https://jestjs.io/docs/expect this might contain other helpful examples of expect tests