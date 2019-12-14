import React from 'react';
import {connect} from 'react-redux';
import  {handleCreateTask} from "../../actions/tasksActions";
import CreateForm from './CreateForm'

 interface MyProps {
    handleCreateTask: (category:string,details:Text) => Promise<any> ;
}

interface state {
    category: string;
    details: Text;
   
}
class LoginPage extends React.Component<MyProps,state> {
   

   componentDidMount(){
       console.log('mounted')
   }
   

    onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
   
    onSubmit  = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        
       this.props.handleCreateTask(this.state.category, this.state.details);

    };

    render() {
        return (
            <div>
                <CreateForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}      
                />   
            </div>
     )}

}

const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
    isAuthenticated: state.isAuthenticated,
    error: state.error
});
const dispatchProps = {
    handleCreateTask: handleCreateTask,
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(LoginPage);