import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {authUserAPI} from "../../api/api";

const LoginForm = (props) => {
    return<form onSubmit={props.handleSubmit}>
    <div><Field name={'login'} component={'input'} placeholder={'Login'}/></div>
    <div><Field name={'password'} component={'input'} placeholder={'Password'}/></div>
        <div><Field name={'rememberMe'} component={'input'} type={'checkbox'} />Remember me </div>
    <div><button >Submit</button></div>
    </form>

}
let LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        authUserAPI.singIn({email:formData.login,
            password:formData.password,
            rememberMe:formData.rememberMe})
    }
    return <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login