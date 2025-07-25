import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MyContext } from './context/MyContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </StrictMode>,
)
