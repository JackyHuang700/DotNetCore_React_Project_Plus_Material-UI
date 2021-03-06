import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import TextInput from '../../../components/General/Forms/TextInput-MaterialUI.js'

import { Auth } from '../../../helpers/auth'
import history from '../../../history'

import RaisedButton from 'material-ui/RaisedButton'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'userName',
        'password',
        'email',

    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    // if (
    //     values.email &&
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //     errors.email = 'Invalid email address'
    // }
    return errors
}

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) =>
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />


const Login = (value) => {
    const {
        userName,
        password,
    } = value;
    const rememberMe = true;
    // debugger;
    Auth.authenticate(userName, password, rememberMe, () => {
        // history.push('/Dashboard');
        history.push('/Dashboard');
    });

    event.preventDefault();
}

const forgot = (event) => {
    history.push('/forgot');
}

const LoginForm = props => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
    } = props
    // debugger;
    return (
        <div className="app flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group mb-0">
                            <div className="col-md-12" >
                                <div className="card p-4">
                                    <div className="card-block">
                                        <h1 className="text-center">Login</h1>
                                        <form onSubmit={handleSubmit(Login)}>
                                            <div className="container">
                                                <div className="row">





                                                    <TextInput
                                                        name="userName"
                                                        label="userName"
                                                        divClassName="input-group"
                                                        labelCustom={<span className="input-group-addon  margin-top-bottom-30"><i className="icon-user"></i></span>}
                                                        display={props.display_userName}
                                                        required={props.required_userName}

                                                        value={""}
                                                    />
                                                    <TextInput
                                                        name="password"
                                                        label="password"
                                                        divClassName="input-group"
                                                        labelCustom={<span className="input-group-addon margin-top-bottom-30"><i className="icon-lock"></i></span>}
                                                        display={props.display_password}
                                                        required={props.required_password}

                                                        value={""}
                                                    />


                                                    <div className="col">

                                                        <RaisedButton
                                                            label="submit"
                                                            primary={true}
                                                            type="submit"
                                                            disabled={pristine || submitting}
                                                        />
                                                        <RaisedButton
                                                            label="Clear Values"
                                                            secondary={true}
                                                            type="button"
                                                            disabled={pristine || submitting}
                                                            onClick={reset}
                                                            className="margin-12"
                                                        />


                                                        <RaisedButton
                                                            label="Forgot password?"
                                                            secondary={true}
                                                            type="button"
                                                            onClick={forgot}
                                                            className="pull-right margin-12"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'LoginForm', // a unique identifier for this form
    validate,
})(LoginForm)


LoginForm.defaultProps = {
    display_userName: true,
    display_password: true,
    display_rememberMe: true,
}