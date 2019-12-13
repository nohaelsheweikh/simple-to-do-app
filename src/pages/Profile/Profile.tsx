import React from 'react';
import {connect} from 'react-redux';
import  {logout} from "../../actions/authActions";
import Header from "../Header"
import * as styles from '../../styles/profile';




class Profile extends React.Component {
   
    render() {
       
        return (

            <div>
                <Header/>
                <styles.ProfileContainer>
                    <styles.ProfileDetails>
                        <styles.ProfileDetailsLeft>
                            <styles.ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
                        </styles.ProfileDetailsLeft>
                        <styles.ProfileDetailsRight>
                            <styles.ProfileDetailsUsername>
                                <styles.HeadingThreeText>yomieluwande</styles.HeadingThreeText>
                            </styles.ProfileDetailsUsername>
                        <styles.ProfileDetailsMeta>
                            <styles.ParagraphText>
                            <strong>5</strong> posts
                            </styles.ParagraphText>
                            <styles.ParagraphText>
                            <strong>296</strong> followers
                            </styles.ParagraphText>
                            <styles.ParagraphText>
                            <strong>269</strong> following
                            </styles.ParagraphText>
                        </styles.ProfileDetailsMeta>
                        <styles.ProfileDetailsName>
                            <styles.ParagraphText>
                            <strong>Yomi</strong>
                            </styles.ParagraphText>
                        </styles.ProfileDetailsName>
                        </styles.ProfileDetailsRight>
                    </styles.ProfileDetails>
                    <styles.ImagesWrapper>
                        
                    </styles.ImagesWrapper>
             </styles.ProfileContainer>
            </div>
     )}

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
)(Profile)

