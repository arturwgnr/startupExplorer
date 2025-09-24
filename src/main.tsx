import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StartupProvider } from './context/StartupContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StartupProvider>
    <App />
    </StartupProvider>
  </StrictMode>,
)
