import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' name={'login'} component={Input} 
                validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder='Password' name={'password'} component={Input} 
                validate={[requiredField]}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={Input} 
                validate={[requiredField]}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login', // unique name for the form
})(LoginForm);

const Login = (props) => {
    
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

export default Login;