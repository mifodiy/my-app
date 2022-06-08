import React from "react";
import style from "./Valid.module.css"
import {Field} from "redux-form";
import {required} from "../../../util/validators/validators";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={style.formControl + ' '+ (hasError ? style.error : "")}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (name, component, validates, placeholder, type={}, text = '') => {
    return <div>
        <Field name={name} component={component} validate={validates} placeholder={placeholder} type={type}/>
        {text}
    </div>
}