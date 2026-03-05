import React from 'react'
import ReactDOM from 'react-dom/client'
import StatusBadge from './components/StatusBadge'

// L-bouton dialk
export function MyBtn() {
  return <button>I am btn 🏆</button>
}

// L-ilsaq f l-HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <StatusBadge/>
)


