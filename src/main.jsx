import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PreSondeoEstadistico from './components/PreSondeoDos'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreSondeoEstadistico />
  </StrictMode>,
)
