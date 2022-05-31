import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, TextInput, ReferenceInput, SelectInput, ReferenceField, NumberField } from 'react-admin'

// const customerFilters = [
//     <TextInput source='FirstName' label="Search" alwaysOn />,
//     <ReferenceInput source='DaysLate' label='DaysLate' reference='customers'>
//         <SelectInput optionText='DaysLate' />
//     </ReferenceInput>,
// ];

const CustomerList = (props) => {
  return (
    <List {...props} 
    // filters={customerFilters}
    >
        <Datagrid rowClick="edit">
            <ReferenceField source='id' reference='customers'>
                <TextField source='id' />
            </ReferenceField>
            {/* <TextField source="id" /> */}
            {/* <NumberField source="CustID" /> */}
            <TextField source="FirstName" />
            <TextField source="LastName" />
            <TextField source="AgreementNumber" />
            <NumberField source="CreditsPaid" />
            <NumberField source="Term" />
            <NumberField source="SemiRate" />
            <NumberField source="MonthlyRate" />
            <NumberField source="DaysLate" />
            <NumberField source="RentalDeferment" />
            <TextField source="Comments" />
            <EditButton basePath='/customers' />
            <DeleteButton basePath='/customers' />
        </Datagrid>
    </List>
  )
}

export default CustomerList