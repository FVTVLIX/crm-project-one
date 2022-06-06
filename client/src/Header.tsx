import React from 'react';
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { UserMenu, Logout, LoadingIndicator } from 'react-admin';

const Header = () => {
    const location = useLocation();

    let currentPath = '/';
    if (!!matchPath('/contacts/*', location.pathname)) {
        currentPath = '/contacts';
    } else if (!!matchPath('/inventory/*', location.pathname)) {
        currentPath = '/inventory';
    } else if (!!matchPath('/tags/*', location.pathname)) {
        currentPath = '/tags';
    }

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Box flex={1} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Box
                                component="img"
                                sx={{ marginRight: '1em', height: 40 }}
                                src={
                                    'https://www.nocompromisegaming.com/static/version1654172785/frontend/NCGaming/default/en_US/images/logo.png'
                                }
                                alt="NCG Logo"
                            />
                            {/* <Typography component="span" variant="h5">
                                NCG
                            </Typography> */}
                        </Box>
                        <Box>
                            <Tabs
                                value={currentPath}
                                aria-label="Navigation Tabs"
                                indicatorColor="secondary"
                                textColor="inherit"
                            >
                                <Tab
                                    label={'Dashboard'}
                                    component={Link}
                                    to="/"
                                    value="/"
                                />
                                <Tab
                                    label={'Contacts'}
                                    component={Link}
                                    to="/contacts"
                                    value="/contacts"
                                />
                                <Tab
                                    label={'Inventory'}
                                    component={Link}
                                    to="/inventory"
                                    value="/inventory"
                                />
                                <Tab
                                    label={'Tags'}
                                    component={Link}
                                    to="/tags"
                                    value="/tags"
                                />
                            </Tabs>
                        </Box>
                        <Box display="flex">
                            <LoadingIndicator
                                sx={{
                                    '& .RaLoadingIndicator-loader': {
                                        marginTop: 2,
                                    },
                                }}
                            />
                            <UserMenu>
                                <Logout />
                            </UserMenu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
