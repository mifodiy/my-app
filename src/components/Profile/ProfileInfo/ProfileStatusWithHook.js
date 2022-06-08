import React, {useEffect, useState} from "react";

const ProfileStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeteEditMode = () => {
        setEditMode(true)
    }

    const onChangeStatus = (e) =>{
        setStatus(e.currentTarget.value)
    }

    const deactiveteEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return <div>{!editMode &&
    <div onDoubleClick={activeteEditMode}>My status:{props.status} </div>}
        {editMode &&
        <div><input autoFocus={true}
                    onChange={onChangeStatus}
                    onBlur={deactiveteEditMode}
                    value={status}/></div>}
    </div>
}

export default ProfileStatusWithHook