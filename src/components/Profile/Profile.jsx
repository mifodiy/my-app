import './Profile.module.css';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profileInfo={props.profileInfo}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;