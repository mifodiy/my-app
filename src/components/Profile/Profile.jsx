import './Profile.module.css';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {savePhoto} from "../../redux/profile-reducer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profileInfo={props.profileInfo}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfileInfo={props.saveProfileInfo}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;