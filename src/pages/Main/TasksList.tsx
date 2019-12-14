import React from 'react';
import {connect} from 'react-redux';
import  {fetchTasks} from "../../actions/tasksActions";
import Header from "../Header"
import Main from "./TaskCard"
interface MyProps {
    fetchTasks: () => void;
    tasks:any
}


class TasksList extends React.Component<MyProps> {

   componentDidMount(){
       this.props.fetchTasks()
   }
    render() {
       
        return (

            <>
                <Header/>
                <Main
                 tasksList={this.props.tasks}
                />

               
          
            </>
     )}

}
const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
    tasks:state.tasksReducer.tasks,
});
const dispatchProps = {
    fetchTasks:fetchTasks,
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(TasksList)

