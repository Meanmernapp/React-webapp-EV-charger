import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './theme/theme.js'
import store from './services/store.js'
import { persistStore } from 'redux-persist'
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss"
let persistor = persistStore(store);



ReactDOM.createRoot(document.getElementById('root')).render(
  // <Suspense fallback={"loading..."}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider {...{ store }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  // </Suspense>
)
