import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const CommentEdit = () => {
  return (
    <Edit>
        <Datagrid rowClick="edit">
            <TextInput disabled source="id" />
            <ReferenceField source="comment_id" reference="comments"><TextField source="comment_id" /></ReferenceField>
            <TextInput multiline source="body" />
            <TextInput source="created_at" />
        </Datagrid>
    </Edit>
  )
}

export default CommentEdit