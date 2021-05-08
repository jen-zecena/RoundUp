import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import UserSearch from '../components/UserSearch';


const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
      });

      store.dispatch = jest.fn();

      component = renderer.create(
          <Provider store={store}>
              <UserSearch/>
          </Provider>
      );
    });
   
    
  it('should render with given state from Redux store', () => {
      expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('component renders correctly', () => {
      //expect(component).toContain("<h1>RSVP Form</h1>").toBeTruthy();
      expect(component).toContain("div.container").toBeTruthy();
      //expect(component).toContain(<Button variant="danger" type="submit"></Button>).toBeTruthy();
      expect(component.root.findByType('text')).toBeTruthy();
      expect(component.root.findByType('email')).toBeTruthy();
  });
});