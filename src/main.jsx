// src\main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'   // ← RTL آماده
import '@fontsource/vazirmatn/400.css'
import '@fontsource/vazirmatn/700.css'
import './index.css'
import './theme.css'                                 // ← سفارشی‌سازی برند
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
