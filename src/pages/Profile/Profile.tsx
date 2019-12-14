import React from 'react';
import {connect} from 'react-redux';
import  {fetchProfile} from "../../actions/profileActions";
import Header from "../Header"
import * as styles from '../../styles/profile';

interface MyProps {
    fetchProfile: () => void;
    user:any
}


class Profile extends React.Component<MyProps> {
   

    componentDidMount(){
        this.props.fetchProfile()
    }
    
    render() {
        if(!this.props.user){
            return(<h4>loading....</h4>)
        }
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
                                <styles.HeadingThreeText>{this.props.user.email}</styles.HeadingThreeText>
                            </styles.ProfileDetailsUsername>

                        <styles.ProfileDetailsMeta>
                            <styles.ParagraphText>
                             <strong>{this.props.user.username}</strong> 
                            </styles.ParagraphText>
                            <styles.ParagraphText>
                             <strong>{this.props.user.age}</strong> years olds
                            </styles.ParagraphText>
                        </styles.ProfileDetailsMeta>

                        <styles.ProfileDetailsName>
                            <styles.ParagraphText>
                                <strong>{this.props.user.hobbies}</strong>
                            </styles.ParagraphText>
                        </styles.ProfileDetailsName>

                     </styles.ProfileDetailsRight>
                    </styles.ProfileDetails>
               
             </styles.ProfileContainer>
            </div>
     )}

}
const mapStateToProps = ( state: any, ownProps: any = {} ) => ({
   isLoading:state.profile.isLoading,
   user:state.profile.user
});
const dispatchProps = {
    fetchProfile:fetchProfile,
  };
  
export default connect(
    mapStateToProps,
    dispatchProps
)(Profile)

