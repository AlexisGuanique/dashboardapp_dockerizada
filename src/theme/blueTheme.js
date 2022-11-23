import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors'

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#4682B4'
        },
        secondary: {
            main: '#FF6347'
        },
        error: {
            main: red.A400
        }
    }
})