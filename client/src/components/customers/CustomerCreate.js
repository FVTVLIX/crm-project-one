import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const CustomerCreate = (props) => {
  return (
    <Create title='Create A New Customer' {...props}>
        <SimpleForm>
            <TextInput source='FirstName' />
            <TextInput source='LastName' />
            <TextInput source='AgreementNumber' />
            <TextInput source='CreditsPaid' />
            <TextInput source='Term' />
            <TextInput source='DaysLate' />
            <TextInput source='RentalDeferment' />
            <TextInput multiline source='Comments' />
        </SimpleForm>

    </Create>
  )
}

export default CustomerCreate