import React from 'react';
import s from './FormsControls.module.css'
import { Field } from 'redux-form';

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <small>{meta.error}</small>}
        </div>
        
    )
}

export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props} />
            {hasError && <small>{meta.error}</small>}
        </div>
        
    )
}

export const createNewField = (placeholder, name, validators, component, props = {}, text ="") => {
    return (
        <div className={className}>
            <Field component={component} name={name} placeholder={placeholder}
                validate={validators} {...props}
            />
            {/* <span>{text}</span> */}
        </div>
    )
}


///////////////////////////
// export const FileInput = ({input: {value: omitValue, onChange, onBlur, ...inputProps,}, meta: omitMeta, ...props,}) => <input onChange={adaptFileEventToValue(onChange)} 
//     onBlur={adaptFileEventToValue(onBlur)} type="file" {...inputProps} {...props}
//     />

export const FieldFile = ({ input, type, meta}) => {
    delete input.value
  
    return (
      <div className={s.fieldFileStyle}>
       
          <input {...input} type={type} id={"file"} accept={"image/jpeg,image/png,image/gif"} />
        
      </div>
    )
  }