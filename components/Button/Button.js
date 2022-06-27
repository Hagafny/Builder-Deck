import React from 'react';
import MuiButton from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import muiTheme from '../../theme/mui';

export const Button = ({ text, link, type }) => (
  <ThemeProvider theme={muiTheme}>
    <MuiButton text={text} href={link} variant={type}>
      {text}
    </MuiButton>
  </ThemeProvider>
);
