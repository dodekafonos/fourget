import React from 'react'
import { useGameStore } from '../stores/game-store'

export const GameStatus: React.FC = () => {
  const { currentPlayer, players, gameStatus } = useGameStore()
  
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
      }}>
        <div style={{
          padding: '10px 20px',
          background: currentPlayer === 'YELLOW' ? '#FFD700' : '#F0F0F0',
          borderRadius: '20px',
          fontWeight: 'bold',
          color: currentPlayer === 'YELLOW' ? '#000' : '#666',
        }}>
          🟡 Jogador Amarelo
        </div>
        
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333',
        }}>
          {gameStatus === 'playing' ? '🎮 Em Andamento' : '⚙️ Configurando...'}
        </div>
        
        <div style={{
          padding: '10px 20px',
          background: currentPlayer === 'BLUE' ? '#1E90FF' : '#F0F0F0',
          borderRadius: '20px',
          fontWeight: 'bold',
          color: currentPlayer === 'BLUE' ? '#FFF' : '#666',
        }}>
          🔵 Jogador Azul
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>
            {players.yellow.score}
          </div>
          <div style={{ color: '#666' }}>Pontos</div>
          <div style={{ color: '#888', fontSize: '0.9rem' }}>
            {players.yellow.pairs} pares
          </div>
        </div>
        
        <div style={{ alignSelf: 'center', fontSize: '1.2rem', color: '#666' }}>
          VS
        </div>
        
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1E90FF' }}>
            {players.blue.score}
          </div>
          <div style={{ color: '#666' }}>Pontos</div>
          <div style={{ color: '#888', fontSize: '0.9rem' }}>
            {players.blue.pairs} pares
          </div>
        </div>
      </div>
    </div>
  )
}