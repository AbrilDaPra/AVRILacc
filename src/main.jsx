import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#F9A8C9',
    },
    background: {
      default: '#FFE1E1',
    },
    error: {
      main: '#c2185b',
    },
    warning: {
      main: '#FFBBE5',
    },
    info: {
      main: '#ff4081',
    },
    success: {
      main: '#c2185b',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
