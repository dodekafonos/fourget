import React from 'react'
import { Group, Rect, Text } from 'react-konva'
import { useGameStore } from '../stores/game-store'
import { GAME_CONSTANTS } from '../lib/constants'

interface CardProps {
  id: string
  emoji: string
  isFlipped: boolean
  isMatched: boolean
  color?: string
  x: number
  y: number
}

interface CardComponentProps {
  card: CardProps
}

const { CARD_SIZE, CARD_MARGIN } = GAME_CONSTANTS

export const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
  const { flipCard, gameStatus, flippedCards, board } = useGameStore()
  
  const x = card.x * (CARD_SIZE + CARD_MARGIN)
  const y = card.y * (CARD_SIZE + CARD_MARGIN)
  
  const handleClick = () => {
    // Só permite clique se:
    // 1. Jogo está em andamento
    // 2. Carta não está virada
    // 3. Carta não está matched
    // 4. Menos de 2 cartas viradas no momento
    if (
      gameStatus === 'playing' &&
      !card.isFlipped &&
      !card.isMatched &&
      flippedCards.length < 2
    ) {
      flipCard(card)
    }
  }
  
  // Cores baseadas no jogador
  const playerColors = {
    YELLOW: '#FFD700',
    BLUE: '#1E90FF',
  }
  
  return (
    <Group
      x={x}
      y={y}
      onClick={handleClick}
      onTap={handleClick}
    >
      {/* Carta virada para baixo (back) */}
      {!card.isFlipped && (
        <Rect
          width={CARD_SIZE}
          height={CARD_SIZE}
          fill="#3498DB"
          cornerRadius={10}
          stroke="#2980B9"
          strokeWidth={3}
          shadowColor="rgba(0, 0, 0, 0.3)"
          shadowBlur={8}
          shadowOffset={{ x: 0, y: 4 }}
          shadowOpacity={0.8}
        />
      )}
      
      {/* Carta virada para cima (front) */}
      {card.isFlipped && (
        <>
          <Rect
            width={CARD_SIZE}
            height={CARD_SIZE}
            fill={card.color ? playerColors[card.color as keyof typeof playerColors] : "#FFFFFF"}
            cornerRadius={10}
            stroke={card.color ? "#000000" : "#BDC3C7"}
            strokeWidth={3}
            shadowColor="rgba(0, 0, 0, 0.2)"
            shadowBlur={4}
            shadowOffset={{ x: 0, y: 2 }}
          />
          
          {/* Emoji */}
          <Text
            text={card.emoji}
            fontSize={CARD_SIZE * 0.5} // 50% do tamanho da carta
            fill="#2C3E50"
            width={CARD_SIZE}
            height={CARD_SIZE}
            align="center"
            verticalAlign="middle"
            fontStyle="bold"
          />
          
          {/* Indicador de jogador (pequeno círculo no canto) */}
          {card.color && (
            <Rect
              x={CARD_SIZE - 20}
              y={5}
              width={15}
              height={15}
              fill={playerColors[card.color as keyof typeof playerColors]}
              cornerRadius={7}
              stroke="#FFFFFF"
              strokeWidth={2}
            />
          )}
        </>
      )}
      
      {/* Efeito de hover - só se não estiver virada e for clicável */}
      {!card.isFlipped && 
       !card.isMatched && 
       gameStatus === 'playing' && 
       flippedCards.length < 2 && (
        <Rect
          width={CARD_SIZE}
          height={CARD_SIZE}
          fill="rgba(255, 255, 255, 0.2)"
          cornerRadius={10}
          listening={false}
        />
      )}
      
      {/* Overlay para cartas matched (efeito de "concluído") */}
      {card.isMatched && (
        <Rect
          width={CARD_SIZE}
          height={CARD_SIZE}
          fill="rgba(255, 255, 255, 0.1)"
          cornerRadius={10}
          listening={false}
        />
      )}
    </Group>
  )
}