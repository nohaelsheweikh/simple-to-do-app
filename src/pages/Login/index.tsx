import React from 'react';
import {connect} from 'react-redux';
import  {login} from "../../actions/authActions";
import LoginForm from './LoginForm'
import {StyledError} from '../../styles/login'

 interface MyProps {
    login: (username:string,password:string) => void;
    error:string
}

interface state {
    username: string;
    password: string;
    
   
}
class LoginPage extends React.Component<MyProps,state> {
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
                <StyledError>{this.props.error}</StyledError>
            </div>
     )}

}

const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
    error: state.auth.error
});
const dispatchProps = {
    login: login,
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(LoginPage);