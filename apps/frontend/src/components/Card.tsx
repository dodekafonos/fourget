import React from 'react'
import { Group, Rect, Text } from 'react-konva'

// Tipos locais temporários (depois virão do shared)
interface CardProps {
  id: string
  value: number
  isFlipped: boolean
  isMatched: boolean
  color?: string
  x: number
  y: number
}

interface CardComponentProps {
  card: CardProps
  onClick?: () => void
}

const CARD_SIZE = 80
const CARD_MARGIN = 10

export const CardComponent: React.FC<CardComponentProps> = ({ card, onClick }) => {
  const x = card.x * (CARD_SIZE + CARD_MARGIN)
  const y = card.y * (CARD_SIZE + CARD_MARGIN)
  
  const handleClick = () => {
    if (onClick && !card.isFlipped && !card.isMatched) {
      onClick()
    }
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
          fill="#3498DB"  // Azul
          cornerRadius={8}
          stroke="#2980B9"
          strokeWidth={2}
          shadowColor="black"
          shadowBlur={5}
          shadowOffset={{ x: 2, y: 2 }}
          shadowOpacity={0.3}
        />
      )}
      
      {/* Carta virada para cima (front) */}
      {card.isFlipped && (
        <>
          <Rect
            width={CARD_SIZE}
            height={CARD_SIZE}
            fill={card.color || "#ECF0F1"}  // Cinza se não tiver cor, senão usa a cor
            cornerRadius={8}
            stroke={card.color ? "#000" : "#BDC3C7"}
            strokeWidth={2}
          />
          
          {/* Número/valor da carta */}
          <Text
            text={card.value.toString()}
            fontSize={24}
            fill="#2C3E50"
            width={CARD_SIZE}
            height={CARD_SIZE}
            align="center"
            verticalAlign="middle"
          />
        </>
      )}
      
      {/* Efeito de hover - só se não estiver virada */}
      {!card.isFlipped && !card.isMatched && (
        <Rect
          width={CARD_SIZE}
          height={CARD_SIZE}
          fill="rgba(255, 255, 255, 0.1)"
          cornerRadius={8}
          listening={false}  // Não intercepta eventos
        />
      )}
    </Group>
  )
}