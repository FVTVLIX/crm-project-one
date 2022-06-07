import React from 'react'
import { Datagrid, Edit, ReferenceManyField, SimpleForm, TextInput, DateField } from 'react-admin'

const CustomerEdit = (props) => {
  return (
    <Edit title='Edit Customer' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='FirstName' />
        <TextInput source='LastName' />
        <TextInput disabled source='AgreementNumber' />
        <TextInput source='CreditsPaid' />
        <TextInput disabled source='Term' />
        <TextInput source='DaysLate' />
        <TextInput source='RentalDeferment' />
        <ReferenceManyField label="comments" reference="comments" target="comment_id">
          <Datagrid>
          <TextInput multiline source='body' />
          <DateField source="created_at" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleForm>
    </Edit>
  )
}

export default CustomerEdit