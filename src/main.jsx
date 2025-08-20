import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import '../src/index.css'
createRoot(document.getElementById('root')).render(
  <div className='flex justify-center'>
    <Provider store={store}>
      <StrictMode>
      <App />
      </StrictMode>
    </Provider>
  </div>
)
