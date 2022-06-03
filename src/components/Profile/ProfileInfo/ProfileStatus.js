import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>{!this.state.editMode &&
        <div onDoubleClick={this.activeteEditMode}>{this.props.status}</div>}
            {this.state.editMode &&
            <div><input onChange={this.onChangeStatus}
                        onBlur={this.deactiveteEditMode}
                        autoFocus={true}
                        value={this.state.status}/></div>}
        </div>

    }
}

export default ProfileStatus