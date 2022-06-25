import { createTheme } from '@mui/material/styles';
import base from './base'
const { TEXT, BACKGROUND, PRIMARY } = base

const muiTheme = createTheme({
  colors: {
    black: TEXT,
    green: PRIMARY,
    green2: '#4E734E',
    green3: '#47634E',
    green4: '#90A195',
},
  palette: {
    type: 'light',
    primary: {
      main: TEXT
      ,
    },
    secondary: {
      main: PRIMARY,
    },
    background: {
      default: BACKGROUND,
    },
    text: {
      primary: TEXT
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton:{
      defaultProps: {
        variant: 'contained',
        color: 'secondary'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontSize: '1.625rem',
          fontWeight: 600,
          lineHeight: '34px'
        },
      }
    },
  },
})

export default muiTheme
