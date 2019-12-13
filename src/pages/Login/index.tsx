import React from 'react';
import {connect} from 'react-redux';
import  {login} from "../../actions/authActions";
import LoginForm from './LoginForm'

 interface MyProps {
    login: (username:string,password:string) => void;
}

interface state {
    username: string;
    password: string;
   
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

       this.props.login(this.state.username, this.state.password);

    };

    render() {
        return (
            <div>
                <LoginForm
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
    login: login,
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(LoginPage);