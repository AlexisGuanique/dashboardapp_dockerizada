import {
    Box,
    Divider,
    Drawer,
    Toolbar,
    Typography
} from '@mui/material';

export const SideBar = ({ drawerWidth }) => {

    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.main' }
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div' color='white'>
                        DASHBOARD APP
                    </Typography>
                </Toolbar>

                <Divider 
                    sx={{
                        color: 'black',
                        backgroundColor: '#6e9fc7',
                        width: '100%',
                        height: 5
                    }}
                />



            </Drawer>

        </Box>
    )
}