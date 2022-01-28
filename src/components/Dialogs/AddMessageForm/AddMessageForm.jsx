import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../../utilities/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField, maxLength50]}
                    name='newMessageBody'
                    placeholder='Enter your message'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'dialog-add-message-form'
})(AddMessageForm);
