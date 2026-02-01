import React, { useEffect } from 'react'
import { Stage, Layer } from 'react-konva'
import { CardComponent } from './Card'
import { useGameStore } from '../stores/game-store'

const BOARD_SIZE = 6
const CARD_SIZE = 80
const CARD_MARGIN = 10

export const GameBoard: React.FC = () => {
  const { state, selectCard, initializeGame } = useGameStore()
  
  // Inicializar o jogo quando o componente montar
  useEffect(() => {
    if (!state) {
      initializeGame()
    }
  }, [state, initializeGame])
  
  const handleCardClick = (card: any) => {
    console.log('Card clicked:', card)
    selectCard(card)
    
    // Aqui vamos implementar a lógica de virar carta depois
  }
  
  if (!state) {
    return <div>Carregando jogo...</div>
  }
  
  const boardWidth = BOARD_SIZE * (CARD_SIZE + CARD_MARGIN)
  const boardHeight = BOARD_SIZE * (CARD_SIZE + CARD_MARGIN)
  const stageWidth = 800
  const stageHeight = 600
  
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
          background: '#1A1A2E',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Layer
          x={(stageWidth - boardWidth) / 2}
          y={(stageHeight - boardHeight) / 2}
        >
          {state.board.flat().map((card) => (
            <CardComponent
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}