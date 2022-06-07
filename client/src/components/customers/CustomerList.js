import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, TextInput, ReferenceInput, SelectInput, ReferenceField, NumberField, ReferenceArrayField, SingleFieldList, SearchInput } from 'react-admin'
import { Paper } from '@mui/material'

const customerFilters = [
  <SearchInput source='q' alwaysOn />,
  <ReferenceInput source='DaysLate' label='DaysLate' reference='customers'>
    <SelectInput optionText='DaysLate' />
  </ReferenceInput>,
];

const CustomerList = (props) => {

  const tagSort = { field: 'FirstName', order: 'ASC' };

  const deleteButtonStyle = {
    color: 'white',
    display: 'flex',
  }

  const editButtonStyle = {
    display: 'flex',
    paddingRight: '0px',
    paddingLeft: '0px'
  }

  return (
    <List {...props}
      filters={customerFilters}
    >
      <Datagrid rowClick="show">
        {/* <TextField source='id' /> */}
        {/* <TextField source="id" /> */}
        {/* <NumberField source="CustID" /> */}
        <ReferenceField label='First Name' source='id' reference='customers'>
          <TextField source="FirstName" />
        </ReferenceField>
        <TextField source="LastName" />
        <TextField source="AgreementNumber" />
        <NumberField source="CreditsPaid" />
        <NumberField source="Term" />
        <NumberField source="SemiRate" />
        <NumberField source="MonthlyRate" />
        <NumberField source="DaysLate" />
        <NumberField source="RentalDeferment" />
        <TextField source="Comments" />
        <EditButton basepath='/customers' variant="contained" style={editButtonStyle} />
        <DeleteButton basepath='/customers' variant="contained" color='error' style={deleteButtonStyle} />
      </Datagrid>
      <Paper elevation={8} />
    </List>
  )
}

export default CustomerList