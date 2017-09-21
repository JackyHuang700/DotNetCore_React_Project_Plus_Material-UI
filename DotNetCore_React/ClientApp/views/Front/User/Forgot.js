import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import axios from 'axios';
import { Auth } from '../../../helpers/auth'
import history from '../../../history'
import TextInput from '../../../components/General/Forms/TextInput-MaterialUI.js'
import Button from 'material-ui/Button';

class Forgot extends Component {


  constructor(props) {
    super(props);

    this.state = {
      // userName: '',
      // email: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.submit = this.submit.bind(this);
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  submit(event) {
    const {
      userName,
      email,
    } = this.state;

    axios({
      url: '/api/WebApi/forgot',
      method: 'post',
      data: {
        userName: userName,
        email: email
      }
    }).then((result) => {
      alert(result.data.message);
    }).catch((error) => {
      console.log(error)
    });
    event.preventDefault();
    return false;
  }

  render() {

    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
  } = this.props;
    // const { params } = this.props.params;
    // const { $invalid } = this.props.easyform.$invalid;
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <form className="col-md-12" onSubmit={handleSubmit(this.submit)}>
                  <div className="card p-4">
                    <div className="card-block">
                      <h1 className="text-center">Forgot</h1>
                      <p className="text-muted">忘記密碼</p>

                      {/* <TextInput name="userName"
                        labelCustom={<span className="input-group-addon"><i className="icon-user"></i></span>}
                        divClassName="input-group mb-3"
                        className="form-control"
                        display={this.props.display_userName}
                        required={this.props.required_userName}
                        validMessage={{ required: 'userName is reduired.' }}
                        onInput={this.handleInputChange}
                        value={this.state.userName}
                        is_Table={false}
                        placeholder="userName" />

                      <TextInput name="email"
                        labelCustom={<span className="input-group-addon"><i className="icon-envelope"></i></span>}
                        divClassName="input-group mb-4"
                        className="form-control"
                        display={this.props.display_email}
                        required={this.props.required_email}
                        pattern={/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/}
                        validMessage={{ required: 'email is reduired.', pattern: '郵件格式錯誤' }}
                        onInput={this.handleInputChange}
                        value={this.state.email}
                        is_Table={false}
                        placeholder="email" /> */}



                      <TextInput
                        name="userName"
                        label="userName"
                        divClassName="input-group"
                        labelCustom={<span className="input-group-addon  margin-16-6-26-6"><i className="icon-user"></i></span>}
                        display={this.props.display_userName}
                        required={this.props.required_userName}
                      />


                      <TextInput
                        name="email"
                        label="email"
                        divClassName="input-group"
                        labelCustom={<span className="input-group-addon  margin-16-6-26-6"><i className="icon-envelope"></i></span>}
                        display={this.props.display_email}
                      />


                      <div className="col">

                        <Button
                          raised
                          color="primary"
                          type="submit"
                          disabled={pristine || submitting}
                          className="margin-12"
                        >
                          送出
                          </Button>
                        {/* <button className="btn btn-primary px-4" disabled={$invalid ? 'disabled' : false}>送出</button> */}
                        <Button
                          raised
                          type="button"
                          onClick={() => e = history.goBack()}
                          className="pull-right margin-12"
                        >
                          返回
                          </Button>
                        {/* <Button type="button" color="warning" onClick={() => e = history.goBack()}>返回</Button> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const validate = values => {
  const errors = {}
  const requiredFields = [
    'userName',
    'email',

  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'email格式錯誤'
  }
  return errors
}



export default reduxForm({
  form: 'ForgotForm', // a unique identifier for this form
  validate,
})(Forgot)

Forgot.defaultProps = {
  display_userName: true,
  display_email: true,

  required_userName: true,
  required_email: true,
}