import {connect} from 'react-redux';

import  {handleUpdateTask} from "../../actions/tasksActions";
import UpdateForm from './UpdateTaskForm'
import Header from '../Header'
import * as React from "react";


 interface MyProps {
    handleUpdateTask:(id:number,task:any)=>void ;
    
}

interface state {
    details: Text;
    route:any
}
class UpdatePage extends React.Component<MyProps,state> {
   
componentDidMount(){
    this.setState({route:this.props})
}
    onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
   
    onSubmit  = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        let currentId= this.state.route.match.params.id
        
       this.props.handleUpdateTask(currentId,this.state.details);

    };

    render() {
      

        
        return (
            <div>
                <Header/>
                <UpdateForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}  

                />   
            </div>
     )}

}


const dispatchProps = {
    handleUpdateTask: handleUpdateTask,

  };
  
export default connect(
    null,
    dispatchProps
)(UpdatePage);