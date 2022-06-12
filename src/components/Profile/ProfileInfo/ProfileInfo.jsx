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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [addFoto, setAddFoto] = useState(false)
    const onPhotoSave = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
            setAddFoto(false)
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
                <img src={profileInfo.photos.large || photo} className={s.mainPhoto} onDoubleClick={
                    () => {setAddFoto(true)}}/>

                <div className={s.description}>
                    {isOwner && addFoto && <div><input type={"file"} onChange={onPhotoSave}/></div>}
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
        <div><b>My name:</b> {profileInfo.fullName}</div>
        <div><b>Looking for a job:</b> {profileInfo.lookingForAJob ? "yes" : "no"}</div>
        <div><b>My skills:</b> {profileInfo.lookingForAJobDescription}</div>
        <div><b>About me:</b> {profileInfo.aboutMe}</div>
        <div><b>Contacts:</b>{Object.keys(profileInfo.contacts).filter(key => profileInfo.contacts[key]).map(key => {
            return <Contact key={key} contactKey={key} contactValue={profileInfo.contacts[key]}/>
        })}</div>
    </div>
}
const Contact = ({contactKey, contactValue}) => {
    return <div className={s.contact}><b>{contactKey}:</b>{contactValue}</div>
}
export default ProfileInfo;

