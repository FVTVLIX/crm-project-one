import React from 'react'
import { Link } from 'react-router-dom'
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, useRecordContext, TabbedShowLayout, Tab, TopToolbar, EditButton, Button, EmailField, ListButton, RefreshButton, ReferenceManyField, Datagrid } from 'react-admin';
import { Divider, Grid, Box, Paper } from '@mui/material'
import CardActions from "@material-ui/core/CardActions";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { makeStyles } from "@material-ui/core/styles";

const CustomerShow = (props) => {

    const custStyle = {
        fontSize: '35px'
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

    const PostShowActions = ({ basePath, data }) => {
        <CardActions>
            <ListButton basePath={basePath} />
            <RefreshButton />
            <AddNewCommentButton record={data} />
        </CardActions>
    }

    const useStyles = makeStyles(theme => ({
        button: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
    }))

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

            <Show
                {...props}
                actions={<PostShowActions />}
            >
                <TabbedShowLayout>
                    <Tab label='Comments'>
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
        </>
    )
}

export default CustomerShow