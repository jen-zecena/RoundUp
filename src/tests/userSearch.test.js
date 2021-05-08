import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import UserSearch from '../components/UserSearch';
import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


configure({ adapter: new Adapter() });


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
                eID: 32,
                posterUrl: 'https://roundupposters.s3.amazonaws.com/poster6.jpg',
                name: 'Event 8'
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
                eID: 44,
                posterUrl: 'https://roundupposters.s3.amazonaws.com/reunion2021_webbanners1500_x_866_2.jpg',
                popularity: 0,
                eventTime: 1620031200000,
                name: 'Reunion',
                description: 'null',
                location: 'null',
                status: 'active',
                tags: [
                  'Anthropology',
                  'Art',
                  'Asian American Studies'
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

      component = mount(<Provider store={store}>
        <UserSearch/>
        </Provider>);  
    });
   
it('+++ render the component', () => {
  expect(component.length).toEqual(1)
 });
  });
//   https://jestjs.io/docs/expect this might contain other helpful examples of expect tests