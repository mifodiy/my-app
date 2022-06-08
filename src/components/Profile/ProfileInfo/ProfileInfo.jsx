import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profileInfo, status, updateStatus}) => {
    if (!profileInfo){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.cover}>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div>
                <img src={profileInfo.photos.large}/>
            <div className={s.description}>
                <div>My name: {profileInfo.fullName}</div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

