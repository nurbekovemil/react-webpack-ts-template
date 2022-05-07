import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const rootElement: HTMLElement | null = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(rootElement!)
root.render(<App />)
