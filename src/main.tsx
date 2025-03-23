import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'

// styles
import './index.css'
import './common.css'

import App from './App.tsx'

import { initRequest } from './services/initRequest.ts'

import { store } from './store'
import { AppProvider } from './contexts/app-context.tsx';
import { ThemeProvider } from './contexts/theme-context.tsx';

initRequest();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <ThemeProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
