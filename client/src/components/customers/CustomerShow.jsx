import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext, TabbedShowLayout, Tab, TopToolbar, EditButton, Button, EmailField } from 'react-admin';
import { Divider, Grid, Box, Paper } from '@mui/material'

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
            <Box>
                <Grid container direction='row' justifyContent='center' alignItems='center' spacing={1} columns={2}>
                    <Show
                        sx={{ width: 500, }}
                    >
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
                        <Paper elevation={16} />
                    </Show>
                </Grid>

            </Box>

            <Show>
                <TabbedShowLayout>
                    <Tab label='Comments'>
                        <TextField multiline source='Comments' />
                        <Paper elevation={16} />
                    </Tab>
                </TabbedShowLayout>
            </Show>
        </>
    )
}

export default CustomerShow