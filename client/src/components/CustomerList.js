import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CustomerList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='FirstName' />
            <TextField source='LastName' />
            <TextField source='AgreementNumber' />
            <TextField source='CreditsPaid' />
            <TextField source='Term' />
            <TextField source='SemiRate' />
            <TextField source='MonthlyRate' />
            <TextField source='DaysLate' />
            <TextField source='RentalDeferment' />
            <TextField source='Comments' />
            <EditButton basePath='/customers' />
            <DeleteButton basePath='/customers' />
        </Datagrid>
    </List>
  )
}

export default CustomerList