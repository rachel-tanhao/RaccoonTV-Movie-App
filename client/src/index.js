import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './app/store';
import ToggleColorMode from './utils/ToggleColorMode';
import App from './components/App';
import './index.css';

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ToggleColorMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ToggleColorMode>
    </ThemeProvider>
  </Provider>
);