import React from 'react';
import { configure,mount } from 'enzyme';
import LoginPage from '../pages/Login/index';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from "redux-mock-store";
import {StyledButton} from '../styles/login'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'



configure({ adapter: new Adapter() })
const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('<Login>', () => {
  it('has a login button', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )
    expect(wrapper.containsMatchingElement(<StyledButton >Login</StyledButton>)).to.be.true;
  });

  it('has a username input field', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )
    expect(wrapper.containsMatchingElement(<input type="text" />)).to.be.true;
  });

  it('has a password input field', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )
    expect(wrapper.containsMatchingElement(<input type="password" />)).to.be.true;
  });

  it('passes login information', () => {
    const username = 'Admin';
    const password = '54321';
    const wrapper = mount(
      <Provider store={store}>
        <LoginPage handleLogin={(state:any) => {
          expect(state.usernamel).to.be.equal(username);
          expect(state.password).to.be.equal(password);
          }}/>
    </Provider>
    );
    
    wrapper.find('button').simulate('click');


  });
});