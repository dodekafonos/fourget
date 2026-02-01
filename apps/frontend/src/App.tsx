import React from 'react'
import { GameBoard } from './components/GameBoard'
import './App.css'

function App() {
  return (
    <div className="app">
      <header style={{
        textAlign: 'center',
        width: '100%',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>🎮 FourGet</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>
          Um jogo híbrido de memória e estratégia.
        </p>
      </header>
      
      <main>
        <GameBoard />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        <p>Em desenvolvimento! • GNU GPL v3.0</p>
      </footer>
    </div>
  )
}

export default App