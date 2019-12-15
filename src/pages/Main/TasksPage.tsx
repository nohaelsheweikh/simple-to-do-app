import React from 'react';
import {connect} from 'react-redux';
import  {fetchTasks,deleteTask,fetchTasksByDate} from "../../actions/tasksActions";
import Header from "../Header"
import TasksList from "./TasksList"
interface MyProps {
    fetchTasks: () => void;
    fetchTasksByDate:(Date:any)=> void;
    deleteTask:(task:any)=>void
    tasks:any
}

interface state {
   date:any
}
class TasksPage extends React.Component<MyProps,state> {

   componentDidMount(){
       this.props.fetchTasks()
    //    this.props.fetchTasksByDate('15-12-2019')
   }
   onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
}
   onSubmit  = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
   this.props.fetchTasksByDate(this.state.date)
};
    render() {
       
        return (
            <>
            <Header/>
                 <TasksList
                    tasksList={this.props.tasks}
                    deleteTask={this.props.deleteTask}
                    fetchTasksByDate={this.onSubmit}
                    onChange={this.onChange}

                />
            </>
     )}

}
const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
    tasks:state.tasksReducer.tasks,
});
const dispatchProps = {
    fetchTasks:fetchTasks,
    fetchTasksByDate:fetchTasksByDate,
    deleteTask:deleteTask
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(TasksPage)

