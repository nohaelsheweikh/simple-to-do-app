import React from 'react';
import {connect} from 'react-redux';
import  {fetchTasks,deleteTask} from "../../actions/tasksActions";
import Header from "../Header"
import TasksList from "./TasksList"
interface MyProps {
    fetchTasks: () => void;
    deleteTask:(task:any)=>void
    tasks:any
}


class TasksPage extends React.Component<MyProps> {

   componentDidMount(){
       this.props.fetchTasks()
   }
    render() {
       
        return (
            <>
            <Header/>
                 <TasksList
                    tasksList={this.props.tasks}
                    deleteTask={this.props.deleteTask}
                />
            </>
     )}

}
const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
    tasks:state.tasksReducer.tasks,
});
const dispatchProps = {
    fetchTasks:fetchTasks,
    deleteTask:deleteTask
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(TasksPage)

