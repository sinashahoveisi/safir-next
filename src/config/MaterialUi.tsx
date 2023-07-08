import type {FC} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Yekan Bakh'
  }
});

const MaterialUi: FC = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUi;
