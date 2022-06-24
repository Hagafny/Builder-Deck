import { createTheme } from '@mui/material/styles';
import base from './base'
const { TEXT, BACKGROUND, PRIMARY } = base
console.log(base)

alert(TEXT)

const muiTheme = createTheme({
  colors: {
  black: TEXT,
  green: PRIMARY,
  green2: '#4E734E',
  green3: '#47634E',
  green4: '#90A195',
  green5: '#DFE9D8',
  pink: '#E6645C',
  pink2: '#EF887E',
  pink3: '#F5AEA9',
  pink4: '#F6CFBE',
  pink5: '#F8ECF4',
  brown: '#0E0D0C',
  brown2: '#C8B19A',
  brown3: '#EFE6D9',
  cream: '#F5F1EA',
  cream2: '#FDF9F0',
  cream3: '#FFFCF9',
  mustard: '#FAB842',
  mustard2: '#FBCE7D',
  mustard3: '#FBE0AF'
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
