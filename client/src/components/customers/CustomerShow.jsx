import React from 'react'
import { Link } from 'react-router-dom'
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext, TabbedShowLayout, Tab, Toolbar, EditButton, Button, EmailField, ListButton, RefreshButton, ReferenceManyField, Datagrid, DeleteButton } from 'react-admin';
import { Divider, Grid, Box, Paper, Typography } from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { makeStyles } from "@material-ui/core/styles";

const CustomerShow = (props) => {

    const custStyle = {
        fontSize: '35px',
        fontWeight: 'bold',
    }

    const CustomerTitle = () => {
        const record = useRecordContext();
        if (!record) return null;
        return <span style={custStyle}>{record.FirstName} {record.LastName}</span>
    }

    const AddNewCommentButton = ({ record }) => {
        const classes = useStyles();
        <Button
            className={classes.button}
            component={Link}
            to={{
                pathname: "/comments/create",
                state: { record: { comment_id: record.id } },
            }}
            label="Add A Comment"
        >
            <ChatBubbleIcon />
        </Button>
    }

    const PostShowActions2 = ({ basePath, data }) => {
        <Toolbar>
            {/* <ListButton basePath={basePath} /> */}
            <RefreshButton />
            {/* <AddNewCommentButton record={data} /> */}
            <DeleteButton />
            <EditButton />
        </Toolbar>
    }

    const CustomerShowActions = () => {
        <EditButton
            variant="contained"
            style={editButtonStyle}
        />
    }

    const useStyles = makeStyles(theme => ({
        button: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
    }))

    const editButtonStyle = {
        display: 'flex',
        paddingRight: '0px',
        paddingLeft: '0px',
        margin: '10px'
    }

    return (
        <>
            {/* <Box>
                <Grid container direction='row' justifyContent='center' alignItems='center' spacing={1} columns={2}>
                    <Show
                        sx={{ width: 500, }}
                    >
                        <SimpleShowLayout divider={<Divider flexItem />}>
                            <CustomerTitle />
                            <TextField disabled source='id' />
                            <TextField source='FirstName' />
                    <TextField source='LastName' />
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
            </Box> */}

            <Box
                sx={{ display: 'flex' }}
                justifyContent='center'
            >
                <Box
                    width={1200}
                >
                    <Show
                        {...props}
                        sx={{ mt: 5 }}
                        // actions={PostShowActions}
                    >
                        <TabbedShowLayout >
                            <Tab label='Comment' >
                                <ReferenceManyField
                                    addLabel={false}
                                    reference="comments"
                                    target='comment_id'
                                    sort={{ field: 'created_at', order: "DESC" }}
                                >
                                    <Datagrid>
                                        <DateField source="created_at" />
                                        <TextField source="body" />
                                        <EditButton />
                                    </Datagrid>
                                </ReferenceManyField>
                                {/* <TextField multiline source='Comments' /> */}
                                <Paper elevation={16} />
                            </Tab>
                        </TabbedShowLayout>
                    </Show>
                </Box>

                <Box
                    ml={6}
                    width={250}
                    minWidth={250}
                >
                    <Grid mt={5}>
                        <Show
                            sx={{ width: 400 }}
                            // actions={CustomerShowActions}
                        >
                            {/* <EditButton variant="contained" style={editButtonStyle} /> */}

                            <SimpleShowLayout
                            // divider={<Divider flexItem />}
                            >
                                {/* <Divider /> */}
                                <CustomerTitle />
                                {/* <TextField disabled source='id' /> */}
                                {/* <TextField source='FirstName' />
                    <TextField source='LastName' /> */}
                                <Typography sx={{ fontStyle: 'bold' }}>Contact Info</Typography>
                                <Divider />
                                <TextField source='PhoneNumber' />
                                <EmailField source='Email' />
                                <Typography sx={{ fontStyle: 'bold' }}>Payment Info </Typography>
                                <Divider />
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
            </Box>
        </>
    )
}

export default CustomerShow