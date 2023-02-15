import React from "react";
import { useField } from "formik";

export const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    /*
    field = onChange, onBlur, value
    meta = touched, errors
    */
    return (
    <>
        <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props}/>
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
    </>
   );
}

export const CheckBox = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
    <>
        <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props} type="checkbox" />
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
    </>
    );
}

export const NumberInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
    <>
        <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props} type="range"/>
        <input {...field} {...props} type="number"/>
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
    </>
   );
}

export const OptionSelect = ({label, options, ...props}) => {
    const [field, meta] = useField(props);
    return (
    <>
        <label htmlFor={props.name}>{label}</label>
        <select {...field} {...props} >
        {options.map( o => {
            return <option value={o.name} key={o.name}>{o.name}</option>
        })}
        </select>
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
    </>
    );
}

export const RadioInput = ({label, options, ...props}) => {
    const [field, meta] = useField(props);
    return (
    <>
        <label htmlFor={props.name}>
            {label}
            {options.map( o => {
                return (
                <div key={o.name}>
                    <label htmlFor={o.name}>{o.name}</label>
                    <input {...field} {...props} type="radio" value={o.name}/>
                </div>
                );
            })}
        </label>
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
    </>
    );
}