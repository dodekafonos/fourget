import React, { useEffect } from 'react'
import { Stage, Layer } from 'react-konva'
import { CardComponent } from './Card'
import { useGameStore } from '../stores/game-store'
import { GAME_CONSTANTS } from '../lib/constants'

const { BOARD_SIZE, CARD_SIZE, CARD_MARGIN } = GAME_CONSTANTS

export const GameBoard: React.FC = () => {
  const { board, initializeGame, gameStatus } = useGameStore()
  
  // Inicializar o jogo quando o componente montar
  useEffect(() => {
    if (gameStatus === 'idle') {
      initializeGame()
    }
  }, [gameStatus, initializeGame])

  // loading state 
if (!board || board.length === 0) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '400px',
      color: '#666'
    }}>
      <div>Carregando tabuleiro...</div>
    </div>
  )
}
  
  // Calcular dimensões
  const boardWidth = BOARD_SIZE * (CARD_SIZE + CARD_MARGIN)
  const boardHeight = BOARD_SIZE * (CARD_SIZE + CARD_MARGIN)
  const stageWidth = Math.max(800, boardWidth + 100)
  const stageHeight = Math.max(600, boardHeight + 100)
  
  return (
    <div className="game-board" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px'
    }}>
      <Stage 
        width={stageWidth} 
        height={stageHeight}
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Layer
          x={(stageWidth - boardWidth) / 2}
          y={(stageHeight - boardHeight) / 2}
        >
          {board.flat().map((card) => (
            <CardComponent
              key={card.id}
              card={card}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}