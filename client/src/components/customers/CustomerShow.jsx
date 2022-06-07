import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext, TabbedShowLayout, Tab, TopToolbar, EditButton, Button, EmailField } from 'react-admin';
import { Divider } from '@mui/material'

const CustomerShow = (props) => {

    const custStyle = {
        fontSize: '35px'
    }

    const CustomerTitle = () => {
        const record = useRecordContext();
        if (!record) return null;
        return <span style={custStyle}>{record.FirstName} {record.LastName}</span>
    }

    return (
        <>

            <Show sx={{ width: 500, }}>
                <SimpleShowLayout divider={<Divider flexItem />}>
                    <CustomerTitle />
                    {/* <TextField disabled source='id' /> */}
                    {/* <TextField source='FirstName' />
                    <TextField source='LastName' /> */}
                    <TextField source='PhoneNumber' />
                    <EmailField source='Email' />
                    <TextField disabled source='AgreementNumber' />
                    <TextField source='CreditsPaid' />
                    <TextField disabled source='Term' />
                    <TextField source='DaysLate' />
                    <TextField source='RentalDeferment' />
                </SimpleShowLayout>
            </Show>

            <Show>
                <TabbedShowLayout>
                    <Tab label='Comments'>
                        <TextField multiline source='Comments' />
                    </Tab>
                </TabbedShowLayout>
            </Show>
        </>
    )
}

export default CustomerShow