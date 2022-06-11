import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profileInfo, handleSubmit, error}) =>{
    return <form onSubmit={handleSubmit}>
        <button>Save</button>
        {error && <div>{error}</div>}
        <div>My name: {createField("fullName", Input, [], "Full name")}</div>
        <div>Looking for a job: {createField('lookingForAJob', Input, [], '', 'checkbox')}</div>
        <div>My skills: {createField('lookingForAJobDescription', Textarea, [], 'Your skills')}</div>
        <div>About me: {createField('aboutMe', Textarea, [], "About me")}</div>

        <div>
            <b>Contacts</b>: {Object.keys(profileInfo.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField('contacts.' + key, Input, [], key)}</b>
            </div>
        })}
        </div>
    </form>
}
const ProfileReduxDataForm = reduxForm({
    form:'profile-form'
})(ProfileDataForm)

export default ProfileReduxDataForm