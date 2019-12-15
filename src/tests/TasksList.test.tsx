import React from 'react';
import { configure,mount } from 'enzyme';
import TasksList from '../pages/Main/TasksList';
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import toJson from "enzyme-to-json";
import {Provider} from 'react-redux'

configure({ adapter: new Adapter() })
const mockStore = configureMockStore([thunk]);
const store = mockStore({})
    
    const tasks =  [
        {
          "id": 1,
          "category": {
            "name": "sport"
          },
          "task_name": "tennis"
        },
        {
          "id": 2,
          "category": {
            "name": "work"
          },
          "task_name": "dev"
        },
        {
          "id": 1576342806617.201,
          "category": {
            "name": "Shopping"
          },
          "task_name": "milk,eggs"
        }
      ]
    
    describe('TaskCards component renders a list of Cards', () => {
      it('renders correctly', () => {
        const wrapper  = mount(
                <Provider store={store}>
                    <TasksList
                        tasks={tasks}
                    />
                </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
      });  
 })
 