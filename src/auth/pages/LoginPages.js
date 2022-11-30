
import { Button, Grid, TextField } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {


  return (
    <AuthLayout title='Login'>
      {/* AQUI VA EL CHILDREN!!! */}
      {/* Formulario de logueo */}
      <form
        aria-label='submit-form'
        className='animate__animated animate__fadeIn animate__faster'
      >
        {/* Container que contiene las entradas del formulario */}
        <Grid container>

          {/* Campo de correo */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="correo@gmail.com"
              fullWidth
              name='email'
            />
          </Grid>

          {/* Campo de contraseña */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder="Contraseña"
              fullWidth
              name='password'
              inputProps={{
                'data-testid': 'password',
              }}
            />

          </Grid>


          {/* container donde estan los botones */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            {/* Boton de login */}
            <Grid item xs={10} sm={13}>
              <Button
                type="submit"
                variant="contained"
                fullWidth

              >
                Login
              </Button>
            </Grid>

            
          </Grid>
        </Grid>

      </form>
    </AuthLayout>
  )
}
