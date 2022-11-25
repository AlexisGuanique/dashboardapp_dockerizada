import { CircularProgress, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew';

import { Table } from "antd";
import "antd/dist/antd.css";


import { useFetch } from '../hooks/useFetch';
import { Box } from '@mui/system';
import { items, columnas, onChange } from '../data/items';




export const ViewTable = () => {

    let urls = items;
    const columns = columnas;

    const response = useFetch(urls, [])

    const { data, isLoading, hasError } = response;
    // console.log(data)


    const handleReload = () => {
        window.location.reload();
    }   

    


    return (
        <>
            <Grid
                container
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'white', borderRadius: 3 }}
            >


                <Typography
                    className='animate__animated animate__backInUp animate__delay-2s'
                    variant='h3'
                    noWrap component='div'

                >
                    Service Monitor
                </Typography>
                <Toolbar />

                <Box
                    className='animate__animated animate__fadeIn animate__delay-3s'
                >
                    {
                        (!data.length)
                        ? <CircularProgress />
                        : <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} onChange={onChange} />
                    }                    


                </Box>



                <IconButton
                    onClick={handleReload}
                    size="large"
                    sx={{
                        color: 'white',
                        backgroundColor: 'primary.main',
                        ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                        position: 'fixed',
                        right: 50,
                        bottom: 70
                    }}
                >

                    <AutorenewIcon sx={{ fontSize: 30 }} />


                </IconButton>





            </Grid>
        </>

    )
}