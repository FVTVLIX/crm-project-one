import React from 'react'
import {
    Create,
    DateInput,
    LongTextInput,
    ReferenceInput,
    TextInput,
    SimpleForm,
    required
} from 'react-admin';



const CommentCreate = (props) => {

    return (
        <Create>
            <SimpleForm>
                <TextInput disabled source="id" />
                <ReferenceInput source="comment_id" reference="comments">
                    <TextInput disabled source="comment_id" />
                </ReferenceInput>
                <TextInput multiline source="body" />
                <DateInput source="created_at" />
            </SimpleForm>
        </Create>
    )
}

export default CommentCreate