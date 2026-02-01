import React from 'react'
import { GameBoard } from './components/GameBoard'
import { GameStatus } from './components/GameStatus'
import './App.css'

function App() {
  return (
    <div className="app">
      <header style={{
        textAlign: 'center',
        padding: '30px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        marginBottom: '30px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}>
        <h1 style={{ margin: 0, fontSize: '3rem', fontWeight: 'bold' }}>
          🎮 FourGet
        </h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9, fontSize: '1.1rem' }}>
          Memory meets strategy • A hybrid game for 2 players
        </p>
      </header>
      
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        <GameStatus />
        <GameBoard />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        color: '#666',
        fontSize: '0.9rem',
        borderTop: '1px solid #eee',
      }}>
        <p>🎯 MVP em desenvolvimento • GNU GPL v3.0 • Próximo: Detecção de 4 em linha</p>
      </footer>
    </div>
  )
}

export default App