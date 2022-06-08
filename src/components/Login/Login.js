import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {maxElementLength, required} from "../../util/validators/validators";
import {connect} from "react-redux";
import {singIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxElementLength(20)

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email', Input, [required, maxLength20], 'Email')}
        {createField('password', Input, [required, maxLength20], 'Password', 'password')}
        {createField('rememberMe', Input, [], '', 'checkbox', 'Remember me')}
        {error && <div>{error}</div>}
        <div>
            <button>Submit</button>
        </div>
    </form>

}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.singIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {singIn})
(Login)