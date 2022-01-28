import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../../../utilities/validators/validators';

const maxLength10 = maxLengthCreator(10);

let AddNewMyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea}
                    placeholder={'Post message'}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
};

export default reduxForm({ 
    form: 'ProfileAddNewMyPostForm' 
})(AddNewMyPostForm);