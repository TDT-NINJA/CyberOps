import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import App from './App.tsx'
import {ImplantProvider} from "./hooks/useImplants.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ImplantProvider>
          <App />
      </ImplantProvider>
  </StrictMode>,
)
