import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { NextUIProvider } from '@nextui-org/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
