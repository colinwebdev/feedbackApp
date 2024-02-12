// Updated for React 18:

// import React from 'react'
// import {createRoot} from 'react-dom/client'
// import './index.css'
// import App from './App'

// const domNode = document.querySelector('#root')
// const root = createRoot(domNode)
// root.render(<App />)

// For the lessons, though:
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.querySelector('#root'))