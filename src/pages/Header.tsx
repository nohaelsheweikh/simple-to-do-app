// Header.js
import React from 'react';
import * as styles from '../styles/header'
import  {logout} from "../actions/authActions";
import {connect} from 'react-redux';
import history from "../utils/history"

interface MyProps {
  logout: () => void;
 
}
function Header(props:MyProps) {
  return (
    <styles.Nav>
      <styles.NavHeader>
        <styles.NavLeft>
          <styles.MenuLink onClick={() => history.push('./main')}  href="#">
                Home
          </styles.MenuLink>
        </styles.NavLeft>
        <styles.NavCenter>
            <styles.MenuLink onClick={() => history.push('./profile')}  href="#">
                Profile
            </styles.MenuLink>
        </styles.NavCenter>
        <styles.NavRight>
          <styles.MenuLink onClick={props.logout} href="#">
            logout
          </styles.MenuLink>
          <styles.MenuLink href="#">
          </styles.MenuLink>
          <styles.MenuLink href="#"> 
          </styles.MenuLink>
        </styles.NavRight>
      </styles.NavHeader>
    </styles.Nav>
  );
}
const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  user:state.auth.user,
});
const dispatchProps = {
  logout:logout,
};

export default connect(
  mapStateToProps,
  dispatchProps
)(Header)