import { useFetch } from '../../hooks/useFetch';


import { CircularProgress, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box } from '@mui/system';

import { Table } from "antd";
import "antd/dist/antd.css";


import { items, columnas, onChange } from '../data/items';
import { getData, getElementByPath } from '../helpers'
import { DashboardLayout } from '../layout/DashboardLayout';




export const ViewTable = () => {

    const columns = columnas;

    const urls = items;
    const response = useFetch(urls)

    const { state, testData } = response;
    const { data } = state;

    const dataProcesada = getElementByPath(data);
    
    const new_data = getData(dataProcesada, testData)

    const handleReload = () => {
        window.location.reload();
    }   

    return (
        <DashboardLayout>
            <Grid
                container
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'white', borderRadius: 3 }}
            >


                <Typography
                    className='animate__animated animate__fadeInUp'
                    variant='h3'
                    noWrap component='div'

                >
                    Service Monitor
                </Typography>
                <Toolbar />

                <Box>
                    {
                        (!new_data.length)
                        ? <CircularProgress sx={{ marginTop: 15}} />
                        : <Table className='animate__animated animate__backInUp' columns={columns} dataSource={new_data} pagination={{ pageSize: 8 }} onChange={onChange} />
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
                        bottom: 30
                    }}
                >

                    <AutorenewIcon sx={{ fontSize: 30 }} />


                </IconButton>





            </Grid>
        </DashboardLayout>

    )
}

// ! 1.- Recupero almacenamiento local

// ! 2.- Adentro de un unico forEach donde proceso la data que viene de la respuesta, para cada elemento
// !    * Si tengo 200 almaceno o actualizo el localStorage con el dato positivo (getElementByPath)
// !    * Guardo en data.date el dato actualizado del localStorage
