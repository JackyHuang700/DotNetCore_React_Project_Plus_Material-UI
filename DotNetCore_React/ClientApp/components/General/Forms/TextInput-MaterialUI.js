import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { Field } from 'redux-form'


const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) =>
    // {
    //     debugger;
    <TextField
        label={label}
        floatingLabelText={label}
        error={touched && error}
        helperText={(touched && error) && error}
        required={custom.required}
        {...input}
        {...custom}
    />
// }


export default class TextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        const myProps = Object.assign({}, this.props);
        delete myProps.labelName;
        delete myProps.labelCustom;
        delete myProps.divClassName;

        let baseField = <Field {...myProps} component={renderTextField} />

        baseField = React.cloneElement(baseField, {
            id: this.props.name
        });

        if (!this.props.display) {
            return (<div></div>)
        }


        const {
            divClassName,
            labelName,
            labelCustom,
} = this.props;

        return (
            <div className={divClassName}>
                {/* <span className="input-group-addon  margin-top-bottom-30"><i className="icon-user"></i></span> */}
                {labelCustom}
                {baseField}

            </div>
        )
    }
}


TextInput.defaultProps = {
    display: true,
    type: 'text',
    className: '',
}

