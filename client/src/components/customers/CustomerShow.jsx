import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext, TabbedShowLayout, Tab } from 'react-admin';

const CustomerShow = (props) => {

    const CustomerTitle = () => {
        const record = useRecordContext();
        if (!record) return null;
        return <span>Customer "{record.title}"</span>
    }

    return (
        <>
            <Show title={<CustomerTitle />}>
                <SimpleShowLayout>
                    <TextField disabled source='id' />
                    <TextField source='FirstName' />
                    <TextField source='LastName' />
                    <TextField source='PhoneNumber' />
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