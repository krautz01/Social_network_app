import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' name={'email'} component={Input} 
                validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder='Password' name={'password'} type={'password'} 
                    component={Input} 
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

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return (
            <Redirect to={'/profile'}/>
        )
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state ) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login} )(Login);