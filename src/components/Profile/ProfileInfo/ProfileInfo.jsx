import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import photo from "../../../assets/image/usersicon.jpeg";
import {savePhoto} from "../../../redux/profile-reducer";

const ProfileInfo = ({profileInfo, status, updateStatus, isOwner, savePhoto}) => {
    if (!profileInfo){
        return <Preloader/>
    }

    const onPhotoSave = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={s.cover}>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div>
                <img src={profileInfo.photos.large || photo} className={s.mainPhoto}/>
                {isOwner && <div><input type={"file"} onChange={onPhotoSave}/></div>}
            <div className={s.description}>
                <div>My name: {profileInfo.fullName}</div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

