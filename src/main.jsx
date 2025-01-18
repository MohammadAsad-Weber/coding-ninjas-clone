import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextAPI from './Context/ContextAPI.jsx' // Providing the Context API to the App
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </StrictMode>,
)
