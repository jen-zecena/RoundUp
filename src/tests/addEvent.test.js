import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import UserSearch from '../components/UploadEvent';
import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UploadEvent from '../components/UploadEvent';



configure({ adapter: new Adapter() });


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('My Connected React-Redux Component', () => {
    //const store;
    let component;
    let wrapper;
    let wrapperDeep;
   
    beforeEach(() => {
        let state = {
          form: {
            eventForm: {
                name: {
                    name: 'eventName',
                    type: 'Field',
                    count: 1
                  },
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
        }

        const store = mockStore(state);


        store.dispatch = jest.fn();


wrapperDeep = mount(<Provider store={store}>
  <UploadEvent/>
  </Provider>);  
  
  wrapper = shallow(<UploadEvent/>, {
    disableLifecycleMethods: true,
  });
       
    });

   
 

    it('+++ render the component', () => {
      expect(wrapper.length).toEqual(1)
      });

 
  it('+++ contains ref', () => {
    expect(wrapperDeep).toContain("Button.button").toBeTruthy();
    //expect(wrapperDeep.instance().tagRef).toBeTruthy();
    });

  // it('should render with given state from Redux store', () => {
  //     expect(component.toJSON()).toMatchSnapshot();
  // });
  
  // it('component renders correctly', () => {
  //     expect(component).toContain("div.container").toBeTruthy();
  // });
});