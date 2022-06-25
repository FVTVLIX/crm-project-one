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

const CommentEdit = (props) => {
  return (
    <Edit title='Edit Comment' {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceField source="comment_id" reference="comments">
          <TextField source="comment_id" />
        </ReferenceField>
        <TextInput multiline source="body" />
        <TextInput source="created_at" />
      </SimpleForm>
    </Edit>
  )
}

export default CommentEdit