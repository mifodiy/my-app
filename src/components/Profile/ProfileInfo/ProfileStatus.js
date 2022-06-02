import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>{!this.state.editMode &&
        <div onDoubleClick={this.activeteEditMode}>{this.props.status}</div>}
            {this.state.editMode &&
            <div><input onBlur={this.deactiveteEditMode} autoFocus={true} value={this.props.status}/></div>}
        </div>

    }
}

export default ProfileStatus