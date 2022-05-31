import React from 'react'
import {Edit, SimpleForm, TextInput } from 'react-admin'

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
        <TextInput multiline source='Comments' />
    </SimpleForm>
    </Edit>
  )
}

export default CustomerEdit