import React from 'react';
import {connect} from 'react-redux';
import  {fetchTasks} from "../../actions/tasks";
import Header from "../Header"
import Main from "./Card"
interface MyProps {
    fetchTasks: () => void;
    tasks:any
}


class MainPage extends React.Component<MyProps> {

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
)(MainPage)

