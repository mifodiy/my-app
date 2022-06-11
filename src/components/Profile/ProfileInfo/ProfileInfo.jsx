import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import photo from "../../../assets/image/usersicon.jpeg";
import {savePhoto} from "../../../redux/profile-reducer";
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profileInfo, status, updateStatus, isOwner, savePhoto, saveProfileInfo}) => {
    if (!profileInfo) {
        return <Preloader/>
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [editMode, setEditMode] = useState(false)
    const onPhotoSave = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        saveProfileInfo(formData).then(
            () => {
                setEditMode(false)
            }
        )
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

                    {editMode
                        ? <ProfileDataForm initialValues={profileInfo}
                                           profileInfo={profileInfo}
                                           onSubmit={onSubmit}/>
                        : <ProfileData profileInfo={profileInfo}
                                       isOwner={isOwner}
                                       goToEditMode={() => {setEditMode(true)}}/>}

                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profileInfo, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>My name: {profileInfo.fullName}</div>
        <div>Looking for a job: {profileInfo.lookingForAJob ? "yes" : "no"}</div>
        <div>My skills: {profileInfo.lookingForAJobDescription}</div>
        <div>About me: {profileInfo.aboutMe}</div>
        <div>Contacts:{Object.keys(profileInfo.contacts).map(key => {
            return <Contact key={key} contactKey={key} contactValue={profileInfo.contacts[key]}/>
        })}</div>
    </div>
}
const Contact = ({contactKey, contactValue}) => {
    return <div>{contactKey}:{contactValue}</div>
}
export default ProfileInfo;

