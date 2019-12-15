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
          "category": "Sport",
          "tasks": [
            {
              "date": "dkjfsldf",
              "name": "go to the club"
            }
          ]
        },
        {
          "id": 1,
          "category": "Games",
          "tasks": [
            {
              "date": "task 2",
              "name": "go to the gym"
            }
          ]
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
 