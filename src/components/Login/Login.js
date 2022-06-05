import React from "react";
import {Field, reduxForm} from "redux-form";
import {authUserAPI} from "../../api/api";
import {Input} from "../common/FormControls/FormControls";
import {maxElementLength, required} from "../../util/validators/validators";
import {connect} from "react-redux";
import {singIn} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

const maxLength20 = maxElementLength(20)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'email'} component={Input} validate={[required, maxLength20]} placeholder={'Email'}/></div>
        <div><Field name={'password'} component={Input} validate={[required, maxLength20]} placeholder={'Password'}/>
        </div>
        <div><Field name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember me</div>
        {props.error && <div>{props.error}</div>}
        <div>
            <button>Submit</button>
        </div>
    </form>

}
let LoginReduxForm = reduxForm({
    // a unique name for the form
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