import React from 'react'
import { Datagrid, EditButton, List, ReferenceField, TextField } from 'react-admin'

const CommentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="comment_id" reference="comments"><TextField source="id" /></ReferenceField>
            <TextField source="body" />
            <TextField source="created_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CommentList