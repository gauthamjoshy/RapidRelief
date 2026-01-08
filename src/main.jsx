import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="235304055054-gr7d7ok31oga3dievnsgmb240vsccq08.apps.googleusercontent.com">
        <AuthContext>
          <App />
        </AuthContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
